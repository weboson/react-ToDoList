import React from 'react';

// link от React-router-dom  - для НЕ ПЕРЕЗАГРУЖАЕМЫХ страницу  ССЫЛОК
import {
    Link
  } from "react-router-dom";


//! СПИСОК МЕНЮ с тегами от react-router-dom: link(a), to и key для лучшей идентификации react 
// компонент генерирующий ДИНАМИЧЕСКИЙ СПИСОК (<li>)
function ListMenu(props) { // передаю пропсом <Listmenu  dataMenu={data.dataMenu}/>
    let numbers = 1;
    return (
        props.dataMenu.map((item, index) => {
            if (item === "Home") {
                return (
                    // ключ "key" в элементе списка (в <li>, но не в ссылке Link/a)
                    // 1) вариант для генерации ключа (key) numbers[index].toString() -  numbers[индекс из map]. в строку
                    <li key={numbers++}>  
                        <Link to="/" >{item}</Link>
                    </li>
                )
                
            } else {
                return (
                <li key={numbers++}>
                    <Link to={item}>{item}</Link>
                </li>
                )
            }
        })
    )
}

export default ListMenu