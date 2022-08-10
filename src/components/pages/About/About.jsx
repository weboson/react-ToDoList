import React from 'react';
// компонент Title 
import Title from '../../Title';
// данные для пропса компонента Title 
import {dataTitle} from '../../../data/data'

const About = () => {

// let list = [];
    return (
        <div className="content about-page">
             <Title dataTitle={dataTitle.dataTitleAbout}/>
        </div>
    )
}


export default About