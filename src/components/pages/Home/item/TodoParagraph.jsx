import React from 'react';
//!isComleted
// текст в нутри TodoItem, который в зависимости от isComleted ИМЕЕТ СТИЛИ (ЗАЧЕРНУТЫЙ ТЕКСТ) 
// если класс crossed_out_todo_title, то срабатывают стили для него
// есть два способа: по условию рендерить врестку, или просто назначать класс (выбрал этот, так как без повторного рендера, хотя React умный и рендерит толкьо изменения - но возможно самоме минимальное это один блок)
const TodoParagraph = ({todo}) => {
    return (
        // isCompleted ? <p className="crossed_out_todo_title"> {todo.title}</p> : <p> {todo.title}</p> 
        <p className={todo.isCompleted ? 'comleted_todo_title' : ""}>{todo.title}</p>
    )
}

export default TodoParagraph;