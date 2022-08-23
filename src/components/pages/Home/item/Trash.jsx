import React from 'react';
//isComleted
//! плагин react-icons
import { GoTrashcan } from 'react-icons/go';

const Trash = ({ todo, removeTodo }) => {
    return (
        <span className='trash-icon'>
            {/* Использую плагин React-icons       обработчик removeTodo из Home транизитом через TodoItem */}
            <GoTrashcan size="26px" onClick={() => removeTodo(todo._id)}/>
        </span>
    )
};

export default Trash;




