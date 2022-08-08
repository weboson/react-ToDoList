//! Вариант с псевдо динамическом меню. Так как список динамический я смог сделать, а сам <Router /> не смог.

import React from 'react';

// import as object: https://learn.javascript.ru/import-export#import
import * as data from '../data/data';

// для роутинга, при помощи плагина "React-router"
// Switch в 6-й версии ReactRuter не актуальна - будет ошибка. Вместо него Routes 
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
// pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

//! СПИСОК МЕНЮ с тегами от react-router-dom: link(a), to и key для лучшей идентификации react 
// компонент генерирующий ДИНАМИЧЕСКИЙ СПИСОК (<li>)
function Listmenu(props) { // передаю пропсом <Listmenu  dataMenu={data.dataMenu}/>
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

//! Роутинг с помощью плагина react-router-dom
function Menu()  {
//  не смог сделать динамичкий <Router>, так как несмог вставить переменную из БД в element={<Combonent />} - element={<{item} />} не получилось
// Но узнал, как сделать динамический роутер с одним шаблоном: https://youtu.be/P5xgsRIKJjo?t=268
// пример кода из видео:   < path="user/:userId" element={<UserDetails />} />
    return (
        <Router>
            {/* nav и class="four" для стилей */}
            <nav className="four"> 
                <ul>
                    {/* component Listmenu. массив data (bp import) передал через props, хотя работало и без пропс, просто data.dataMenu.map... */}
                    <Listmenu  dataMenu={data.dataMenu}/>
                </ul>
            </nav>

            
            <Routes>
                {/* <Route exact path="" element={<Home />} />  - компонент/тег можно заркыть сразу "/" так тоже сработает*/}
                <Route exact path="/" element={<Home />}>        
                </Route>
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/error" element={<Error />}>
                </Route>
                {/* {routePaths.map((item, index) => {
                        if (item === "Home") {
                            return <Route path="/" element={item}></Route>
                        } else {
                            return <Route path={item} element={item}></Route>
                        }
                })} */}
            </Routes>
        </Router>    
    )
    

}



export default Menu