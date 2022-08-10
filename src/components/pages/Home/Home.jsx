import React from 'react';
// компонент Title 
import Title from '../../Title'; // ../ - две точки - это на шаг назад по древу

// данные для пропса компонента Title 
import {dataTitle} from '../../../data/data'

const Home = () => {

    return (
        <div className='content home-page'>
            {/* передаю пропсы (dataTitle=dataTitleHome) именно для заголовков страницы Home */}
            <Title dataTitle={dataTitle.dataTitleHome}/>    
        </div>
          
    )
}


export default Home