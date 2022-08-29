import React from 'react';
// компонент Title 
import Title from '../../Title'; // ../ - две точки - это на шаг назад по древу
// компонент Todoitem
import TodoItem from './item/TodoItem';
// комопнент CreateTodoField
import CreateTodoField from './create-todo-field/CreateTodoField';

// данные для пропса компонента Title 
import { dataTitle } from '../../../data/data'
import { todos } from '../../../data/dataTodos';

//!Коротко об функции удаления:
//1) В состояние скопировал данные из todos
//2) Создал обработчик removeTodo - и в нем отфильтровал массив (который в state) от текущего id, на который нажата иконка корзины 
// а именно изменил копию и далее присвоил состоянию эту копию.
//3) В Trash.jsx повесил на иконку корзину обработчик (передав прежде ему changeTodoб как props), 
// и кликая на него срабатывает обработчки из Home(здесь), который исключает id нажатого todo-блока, 
// и видимо React хранит в своем состоянии наш массив, и при изменении его список todo рендерится(обновляется) 
// и остаюся не нажатые блоки, либо вовсе не остаются

//! вариант 1: состояние в КЛАССовом компоненте (БЕЗ ХУКОВ)
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = false
        //! СОСТОЯНИЕ
        this.state = {
            // _id: todos._id,
            // isCompleted: todos.isCompleted,
            // присвоил данные, как состояние - без этого не получается
            todos: todos,
            // для input 
            value: '',
        };
    }


    //! ОБРАБОТЧИК - (Done!) меняющий состояние
    // стрелочный метод, так как нужно приявязать внешний контекст (когда будет вызов при событии)
    // вызываем его в Check.jsx с атрибутом "_id"  -  "changeTodo(todo._id)"
    changeTodo = (id) => {
        // методом Деструктурирующего присваивания создали копию данных todos, который в состоянии this.state. 
        const copy = [...this.state.todos]
        // ИНИЦИАЛИЗИРОВАТЬ элемент - фильтр по всем элементам копии, где элмент._id == id, который мы вводим аргументом (changeTodo = (id)) 
        // и в Check.jsx мы вызываем: changeTodo(todo._id) от куда и берется id. У каждого todo свой id, он берется из БД(data.jsx) и React с помощью _id инициализирует каждый элемент и в каждом элементе (компоненте) при событии вызывается changeTodo(todo._id)
        const current = copy.find((item) => item._id === id)
        // переключил = изменили на противоположное значение (true на false, а false на true)
        current.isCompleted = !current.isCompleted
        // установили новое (измененное) состояние
        this.setState({ isCompleted: copy.isCompleted });
    }

    //!обработчик - корзина(Trash)/удалятор - рендерит только те TodoItem, у которых только isCompleted = flase
    removeTodo = (id) => {
        // можно посмотреть разыне данные 
        // console.log(cur);
        // заметил два способа (в данной ситуации) изменить массив хронящийся в состоянии
        // 1 варинат: тупо мутировать массив в состоянии на месте. Но вроде,нельзя мутировать состояние, хотя работает - желательно мутировать копию 
        // this.setState({
        //     t0dos: this.state.todos.filter(t=> t._id !== id), // отфилтровал от ТЕКУЩЕГО id блока
        // })

        // 2 вариант: мутировал копию (ведь мутировать состояние нельзя - ТОЧНО НЕЛЬЗЯ - метод setTodos тому доказательство)
        const copyTodos = this.state.todos
        this.setState({
            todos: copyTodos.filter(t => t._id !== id), // отфильтровал от ТЕКУЩЕГО id блока
        })
    }

    //! для передачи метода, который меняет состояние компонента Home
    setTodos = (arr) => {
    //! мутировать состояние нельзя, т. е. примерно так нельзя:
    // this.setState({
    //        t0dos нельзя использовать при изменений данных
    //     t0dos: [arr, ...todos], 
    // })
    //! иначе в данном случае, добавлялась только одна todo-задача, а если еще раз ввести задачу, то она обновит старую, но количество останется прежним 4 todo-item
    //! сналча копию copyArr
        const copyArr = [...this.state.todos]
    //! потом уже присваивать ГОТОВЫЕ изменения
        this.setState({
            // ...todos в конце, чтобы добавленный todo был на верху
            todos: [arr, ...copyArr], 
        })
        // console.log(this.state.todos);
        // console.log(copyArr);
    }

    render() {
        return (
            <div className='content home-page'>
                {/* передаю пропсы (dataTitle=dataTitleHome) именно для заголовков страницы Home */}
                <Title dataTitle={dataTitle.dataTitleHome} />


                {/* todo - список  */}
                <div className='todos'>
                    {/* массив todos из состояния state*/}
                    {this.state.todos.map((item) => {
                        return (
                            // передаю ОБРАБОТЧИК изменения состояния (changeTodo())
                            //! ВАЖНО: Чтобы ПЕРЕДАТЬ В ОБРАБОТЧИК для изменения СОСТОЯНИЕ (state), нужно использовать 1 из 3 вариантов: https://ru.reactjs.org/docs/handling-events.html#gatsby-focus-wrapper
                            //1) нужно чтобы код обработчика был написан ввиде стрелочной функции: changeTodo = (id) => {..}
                            //2) или можно использовать привязку контекста: changeTodo={this.changeTodo.bind(this)}
                            //3) либо колбек в событии  <button onClick={() => this.handleClick()}>, но это не приветствуется, так как может порождать множество колбэеков:
                            //* this.STATE.nameState <- верно
                            //!- this.nameState <- не врено
                            <TodoItem key={item._id} todo={item} changeTodo={this.changeTodo} removeTodo={this.removeTodo} />

                        )
                    })}
                     {/* todo поле ввода  */}
                    <CreateTodoField todosData = {this.state.todos} setTodos={this.setTodos} />
                </div>
               

            </div>

        )
    }

}

// пытался сохранить в window, чтобы про тестить в консоли
// window.addTodo = new Home().addTodo
// window.todos  = todos

export default Home