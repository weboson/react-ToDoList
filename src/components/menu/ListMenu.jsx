import React from 'react';
// item menu
import ItemMenu from './ItemMenu'


//! СПИСОК МЕНЮ с тегами от react-router-dom: link(a), to и key для лучшей идентификации react 
// компонент генерирующий ДИНАМИЧЕСКИЙ СПИСОК (<li>)
const ListMenu = (props) => { // передаю пропсом <Listmenu  dataMenu={data.dataMenu}/>
    let numbers = 1;
    return (
        props.dataMenu.map((item, index) => {
                return (
                <ItemMenu key = {numbers++} to={item.to} title={item.title} />
                // <li key={numbers++}>
                //     <Link to={item}>{item}</Link>
                // </li>
                )
        })
    )
}

export default ListMenu
