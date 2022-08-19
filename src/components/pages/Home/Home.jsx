import React from 'react';
// компонент Title 
import Title from '../../Title'; // ../ - две точки - это на шаг назад по древу
// компонент Todoitem
import TodoItem from './item/TodoItem'; 

// данные для пропса компонента Title 
import {dataTitle} from '../../../data/data'
import { todos } from '../../../data/dataTodos';


//! вариант 1: состояние в КЛАССовом компоненте (БЕЗ ХУКОВ)
class Home extends React.Component {
        constructor(props) {
            super(props);
            this.toggleClass = false
            //! СОСТОЯНИЕ
            this.state = {isComleted: todos.isComleted};
        }
    
    //! ОБРАБОТЧИК меняющий состояние
    // стрелочный метод, так как нужно приявязать внешний контекст (когда будет вызов при событии)
    // вызываем его в Check.jsx с атрибутом "_id"  -  "changeTodo(todo._id)"
    changeTodo = (id) => {
        // методом Деструктурирующего присваивания создали копию данных todos 
        const copy = [...todos]
        // ИНИЦИАЛИЗИРОВАТЬ элемент - вычисления именно определенного элемента (item) в списке (итерируемым .map) в TodoItem.jsx
        const current = copy.find((item) => item._id === id)
        // переключил = изменили на противоположное значение (true на false, а false на true)
        current.isComleted = !current.isComleted
        // установили новое (измененное) состояние
        this.setState({isComleted: copy.isComleted});
    }   
    
    render() {
        return (
            <div className='content home-page'>
                {/* передаю пропсы (dataTitle=dataTitleHome) именно для заголовков страницы Home */}
                <Title dataTitle={dataTitle.dataTitleHome}/> 
    
                <div className='todos'>
                    {todos.map((item) => {
                        return (
                        // передаю ОБРАБОТЧИК изменения состояния (changeTodo())
                        //! ВАЖНО: Чтобы ПЕРЕДАТЬ В ОБРАБОТЧИК для изменения СОСТОЯНИЕ (state), нужно использовать 1 из 3 вариантов: https://ru.reactjs.org/docs/handling-events.html#gatsby-focus-wrapper
                        //1) нужно чтобы код обработчика был написан ввиде стрелочной функции: changeTodo = (id) => {..}
                        //2) или можно использовать привязку контекста: changeTodo={this.changeTodo.bind(this)}
                        //3) либо колбек в событии  <button onClick={() => this.handleClick()}>, но это не приветствуется, так как может порождать множество колбэеков:
                        //* this.STATE.nameState <- верно
                        //!- this.nameState <- не врено
                        <TodoItem key={item._id} todo={item} changeTodo={this.changeTodo} />
                        
                        )
                    })} 
                </div>
            </div>
              
        )
    }    

}


//! добавил: 
// newStyle: ''
// newStyle: 'crossed_out_todo_title'
// newStyle={this.newStyle}
// вариант 2: состояние с использованием хуков: https://youtu.be/sAa71agGwcg?t=1628
// const Home = () => {

//     return (
//         <div className='content home-page'>
//             {/* передаю пропсы (dataTitle=dataTitleHome) именно для заголовков страницы Home */}
//             <Title dataTitle={dataTitle.dataTitleHome}/> 

//             <div className='todos'>
//                 {todos.map((item) => {
//                     return (

//                     <TodoItem key={item._id} todo={item} />
                    
//                     )
//                 })} 
//             </div>
//         </div>
          
//     )
// }



export default Home