import React from 'react';
//!isComleted

// Если нужны стили прямо в компоненте, то в React делается так: https://reactjs.org/docs/dom-elements.html#style
// вставляется в элемент компонента атрибут "style={nameVar}",примерно такой: <div className='check_box' style={checkBox}>
// далее сами стили в объекте "const checkBox = { color: "white",}
// СТИЛИ в js-синтаксисе (вместо "-", заглавная буква)
// переменная стилей для рамки (вокруг галочки):
// ПРИМЕР:
// const checkBox = {
//     position: "absolute",
//     border: "solid 1px #fff",
//     width: "16px",
//     height: "16px",
//     borderRadius: "0.3em",
// }
//+++++++++ПЕРЕДУМАЛ: стили бросил в общие стили App.css


const Check = ({isComleted, todo, changeTodo}) => {
    return (
        // произвел подъем обработчика состояния "changeTodo" по пути: Home -> TodoItem(посредник) -> Check
        // Источник инфы "подъем состояния" (в игре): https://ru.reactjs.org/tutorial/tutorial.html#lifting-state-up
        // Код игры, где используется "подъем", там Board является посредником между из Game в Square: https://codepen.io/gaearon/pen/gWWZgR?editors=0010
        <div className='check_box' onClick={() => changeTodo(todo._id)}>
            {/* если isComleted = true (которую меняет обработчик changeTodo), то появится галочка */}
            {isComleted && <div className="check_icon"></div>}       
        </div>
        
    )
};

export default Check;




