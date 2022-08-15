import React from 'react';
// item menu
import ItemMenu from './ItemMenu'


//! СПИСОК МЕНЮ с тегами от react-router-dom: link(a), to и key для лучшей идентификации react 
// компонент генерирующий ДИНАМИЧЕСКИЙ СПИСОК (<li>)
const ListMenu = (props) => { // передаю пропсом <Listmenu  dataMenu={data.dataMenu}/>
    let numbers = 1;
    return (
        props.dataMenu.map((item, index) => {
            if (item === "Home") {
                return (
                    // ключ "key" в элементе списка (в <li>, но не в ссылке Link/a)
                    // 1) вариант для генерации ключа (key) numbers[index].toString() -  numbers[индекс из map]. в строку
                    // 2) вариант: Инкрементация ++ увеличивает переменную на 1: number++
                    <ItemMenu key = {numbers++} to = '/' item = {item} />
                    // в зависимости от пропсов, компонент формирует верстку
                    // <li key={numbers++}>  
                    //     <Link to="/" >{item}</Link>
                    // </li>
                )
                
            } else {
                return (
                <ItemMenu key = {numbers++} to = {item} item = {item} />
                // <li key={numbers++}>
                //     <Link to={item}>{item}</Link>
                // </li>
                )
            }
        })
    )
}

export default ListMenu
