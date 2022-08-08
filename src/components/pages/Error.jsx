import React from 'react';

// link от React-router-dom  - для НЕ ПЕРЕЗАГРУЖАЕМЫХ ССЫЛОК
import {
    Link
  } from "react-router-dom";


const Error = () => {
    return (
        // С простой ссылкой страница будет перезагружатся
        //     <p>Go <a href="/">home</a></p>

            <div>
                <h1 className="error-code">404</h1>
                <p>Something going wrong...</p>
                <p>Go <Link to="/">home</Link></p>
                {/* Если поставить просто ссылку <a>, то будет перезагружатся ВСЯ страница. 
                А с link от React-router-dom можно создавать НЕ ПЕРЕЗАГРУЖАЕМЫЕ ССЫЛКИ  */}
            </div>
   
        
    )
}

export default Error