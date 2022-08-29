import React from 'react';

// иконка галочка 
// хоть в видео и использовался утилита для иконок, я всё же пока не стану пользоваться, пока, и установлю галочку с использованием css стилей: https://codepen.io/weboson/pen/YzajmNo
import Check from './Check'
// сам текст в todo
import TodoParagraph from './TodoParagraph'
// корзина
import Trash from './Trash'

//транзит todo в TodoParagraph и Check
const TodoItem = ({todo, changeTodo, removeTodo}) => { // todo и changeTodo транзитеры данных(в виде пропсов) в компонент Check.jsx


// li - список todos
     return (
        // код метода changeTodo(id 'элемента), который изменяет состояние, находится в Home.jsx
         <div className='todo_item'>
            {/* checkbox */}
            <Check isCompleted={todo.isCompleted} todo={todo} changeTodo={changeTodo}/>
        {/* параграф который внутри totoitem и в зависимости от isCompleted зачеркнут или нет */}
            {/* < TodoParagraph isCompleted={todo.isCompleted} todo={todo}/> */}
            < TodoParagraph todo={todo}/>
            {/* корзина (компонент->иконка) для удаления */}
            <Trash todo={todo} removeTodo={removeTodo}/>
        </div>
    )
};

export default TodoItem