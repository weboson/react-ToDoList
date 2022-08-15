import React from 'react';

// иконка галочка 
// хоть в видео и использовался утилита для иконок, я всё же пока не стану пользоватся, пока, и установлю галочку с использованием css стилей: https://codepen.io/weboson/pen/YzajmNo
import Check from './Check'

const TodoItem = ({todo, changeTodo}) => { // todo и changeTodo транзитеры данных(в виде пропсов) в компонент Check.jsx

// li - список todos
     return (
        // код метода changeTodo(id 'элемента), который изменяет состояние, находится в Home.jsx
        <div className='todo_item'>
            <Check isComleted={todo.isComleted} todo={todo} changeTodo={changeTodo}/>
            <p>
                {todo.title}
            </p>           
        </div>
    )
};



export default TodoItem