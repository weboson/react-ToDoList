import React from "react";

// link от React-router-dom  - для НЕ ПЕРЕЗАГРУЖАЕМЫХ страницу  ССЫЛОК
import {
    Link
  } from "react-router-dom";



const ListMenu = (props) => {
    return (
        // переданный ключ "key" не нужно вставлять в назначенный компонент. То есть вот так не нужно: <li key={result.key}></li> - можно просто передать и все:
        // <ItemMenu key = {numbers++} />
        <li>  
            <Link to={props.to} >{props.item}</Link>
        </li>
    )
}

export default ListMenu

