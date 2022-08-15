// файл №3 (по иерархии)
// Является базовым компонентом App, 
// который по определенной логике возврощает определенную старницу (JSX-файл), например страницы в роутинге.
// Роутинг - повзоляет не перезагружать старницу целиком, а только необходимую часть
import React from "react";


// styles
import './App.css';


// для роутинга, при помощи плагина "React-router"
// Switch в 6-й версии ReactRuter не актуальна - будет ошибка. Вместо него Routes 
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

// данные для формирования списка меню
// import as object: https://learn.javascript.ru/import-export#import
import * as data from './data/data';
// Список li-меню
import ListMenu from "./components/menu/ListMenu";
// pages
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Error from './components/pages/Error/Error';

//! Роутинг с помощью плагина react-router-dom
// не смог сделать динамичкий <Router>, так как несмог вставить переменную из БД в element={<Combonent />} - element={<{item} />} не получилось
// Но узнал, как сделать динамический роутер с одним шаблоном: https://youtu.be/P5xgsRIKJjo?t=268
// пример кода из видео:   < path="user/:userId" element={<UserDetails />} />
function App() {

  // если прокликать все меню и смотреть в коде в режиме разработчика, то видно, что обновляется только контент, который изменяется
  // то есть сам списко меню не меняется, а только содержимое страниц (компоненты Home, Error, About и тому подобное)
  // даже если оборачивать <Menu /> в объединяющий тег (к примеру <nav>) - хотя до этого думал <nav></nav> вредит и обновляется всё.

  return (
    <Router>
    {/* МЕНЮ (на всех старницах) */}
    {/* nav и class="four" для стилей */}
    <nav className="four"> 
        <ul>
            {/* модуль со списком */}
            {/* component Listmenu. массив data (bp import) передал через props, хотя работало и без пропс, просто data.dataMenu.map... */}
            <ListMenu  dataMenu={data.dataMenu}/>
        </ul>
    </nav>

    {/* СТРАНИЦЫ  */}
    <Routes>
        {/* <Route exact path="" element={<Home />} />  - компонент/тег можно заркыть сразу "/" так тоже сработает*/}
        <Route exact path="/" element={<Home />}>        
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/error" element={<Error />}>
        </Route>
    </Routes>
</Router>    
  );
}

export default App;

