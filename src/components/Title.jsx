import React from 'react';
// можно и сюда передать данные, но хочется правильно, через пропсы (вызов из Home.jsx)
//import {dataTitle} from '../data/data.jsx'

// данные из пропса от Home.jsx и данных в /data/data.jsx
const Title = (props) => {
// если нет в данных свойства "dataTitle.secondParagraph", не выводить их. К примеру в Home имеется secondParagraph, a в Error нет.
// замечу, что с JSX в условии нужно возращать не строку, а прямо HTML-разметку: <p>{props.dataTitle.secondParagraph}</p>
    let secondParagraph = (props.dataTitle.secondParagraph) ? <p>{props.dataTitle.secondParagraph}</p> : null;

    return (
            <div className='title-page'>
                <h1>{props.dataTitle.h1}</h1>
                <p>{props.dataTitle.firstParagraph}</p>
                {/* если имеется в данных, то вывести secondParagraph (переменная выше, строка 9) */}
                {secondParagraph}
            </div>
    )
}


export default Title