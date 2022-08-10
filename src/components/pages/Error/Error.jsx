import React from 'react';
// компонент Title 
import Title from '../../Title';

// link от React-router-dom  - для НЕ ПЕРЕЗАГРУЖАЕМЫХ страницу  ССЫЛОК
import {
    Link
  } from "react-router-dom";

// данные для пропса компонента Title 
import {dataTitle} from '../../../data/data'

const Error = () => {
    return (
        // С простой ссылкой страница будет перезагружатся
        //     <p>Go <a href="/">home</a></p>

            <div className="content error-page">
                {/* передаю пропсы (dataTitle=dataTitleError) именно для заголовков страницы Home */}
                {/* <Title dataTitle={dataTitle.dataTitleError}/>     */}
                <Title dataTitle={dataTitle.dataTitleError}/> 
                <p>Go <Link to="/" key="1">home</Link></p>
                {/* Если поставить просто ссылку <a>, то будет перезагружатся ВСЯ страница. 
                А с link от React-router-dom можно создавать НЕ ПЕРЕЗАГРУЖАЕМЫЕ ССЫЛКИ  */}
            </div>
   
        
    )
}

export default Error