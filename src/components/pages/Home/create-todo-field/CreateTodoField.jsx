// если используем Хуки не забываем их импортировать из React 
// import {useState} from 'react';
// запись объедененная 
import React, { useState } from 'react';


// Поле ввода  
const CreateTodoField = ({ addTodo, setTodos }) => {
    //! ХУК useState() - использую хук состояния
    const [title, setTitle] = useState('');

    // можно увидеть, что (title) вводим в поле
    // console.log(title)

    //! обработчик отправки текста (title) с поля-input и генерация нового объекта в массив todos
    addTodo = (title) => {
        // setTodos идет из Home, о\этот метод изменяет сосотяние у Home
        // сокращенная запись title: title это просто title 
        setTodos({_id: new Date().getMilliseconds(), title, isCompleted: false});
        // сбросил значения в поле ввода
        setTitle('');
        // alert(title)
    }


    return (
        <div className='create-todo-field'>
            <input 
            className="text-field-input"
            type="text"
            placeholder='Add a task' 
            onChange={e => setTitle(e.target.value)} 
            value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
                )
};

export default CreateTodoField;


