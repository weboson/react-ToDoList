import React from 'react';

// иконка галочка 
// хоть в видео и использовался утилита для иконок, я всё же пока не стану пользоваться, пока, и установлю галочку с использованием css стилей: https://codepen.io/weboson/pen/YzajmNo
import Check from './Check'

import TodoParagraph from './TodoParagraph'

//!транзит  todo в TodoParagraph и Check
const TodoItem = ({todo, changeTodo}) => { // todo и changeTodo транзитеры данных(в виде пропсов) в компонент Check.jsx


// li - список todos
     return (
        // код метода changeTodo(id 'элемента), который изменяет состояние, находится в Home.jsx
         <div className='todo_item'>
            <Check isComleted={todo.isComleted} todo={todo} changeTodo={changeTodo}/>
        {/* параграф который внутри totoitem и в зависимости от isComleted зачеркнут или нет */}
            < TodoParagraph isComleted={todo.isComleted} todo={todo}/>

        </div>
    )
};

export default TodoItem