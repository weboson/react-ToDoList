import React from 'react';
// компонент Title 
import Title from '../../Title'; // ../ - две точки - это на шаг назад по древу
// компонент Todoitem
import TodoItem from './item/TodoItem'; 

// данные для пропса компонента Title 
import {dataTitle} from '../../../data/data'
import { todos } from '../../../data/dataTodos';


// вариант 1: состояние в классовом компоненте (без хуков)
class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isComleted: todos.isComleted};
        }
    
    
    changeTodo = (id) => {
        // методом Деструктурирующего присваивания создали копию данных todos 
        const copy = [...todos]
        // вычисления именно определенного элемента (item) в списке (итерируемым .map) в TodoItem.jsx
        const current = copy.find((item) => item._id === id)
        // изменили на проитвоположное значение (true на false, а false на true)
        current.isComleted = !current.isComleted
        // установили новое (измененное) состояние
        this.setState({isComleted: copy.isComleted});
    }   
    
    // проверка значения isComleted
    
    render() {
        return (
            <div className='content home-page'>
                {/* <button onClick={() => this.changeTodo("2f3t")}>Проверка: Работает!</button> */}
                {/* передаю пропсы (dataTitle=dataTitleHome) именно для заголовков страницы Home */}
                <Title dataTitle={dataTitle.dataTitleHome}/> 
    
                <div className='todos'>
                    {todos.map((item) => {
                        return (
                        // передаю метод измененния состояние (changeTodo())
                        //! ВАЖНО: Чтобы передать обработчик для изменения состояние (state), нужно использовать 3 варианта: https://ru.reactjs.org/docs/handling-events.html#gatsby-focus-wrapper
                        //1) нужно чтобы код обработчика был написан ввиде стрелочной функции: changeTodo = (id) => {..}
                        //2) можно использовать привязку контекста: changeTodo={this.changeTodo.bind(this)}
                        //3) либо колбек в событии  <button onClick={() => this.handleClick()}>, но это не приветствуется, так как может порождать множество колбэеков:
                        <TodoItem key={item._id} todo={item} changeTodo={this.changeTodo}/>
                        
                        )
                    })} 
                </div>
            </div>
              
        )
    }    

}

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