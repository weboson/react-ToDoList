// файл №3 (по иерархии)
// Является базовым компонентом App, 
// который по определенной логике возврощает определенную старницу (JSX-файл), например страницы в роутинге.
// Роутинг - повзоляет не перезагружать старницу целиком, а только необходимую часть
import React from "react"; // для работы утилиты React - roter
// React-router
// Switch в 6-й версии ReactRuter не актуальна - будет ошибка. Вместо него Routes 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// styles
import './App.css';
// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';

function App() {
  return (
    // Router, - Роутинг
    // menu list
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="" element={<Home />}>        
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/error" element={<Error />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


//! ДОБАВИТЬ КОММИТ  В ГИТХАБ "Basic routing"