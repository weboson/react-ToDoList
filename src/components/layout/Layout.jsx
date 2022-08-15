// В  Layout обычно вкладывают компоненты: <header />, <footer /> и так далее. Хоть у нас такого нет, все же лучше учится популярной практики
import React from 'react';

// чтобы можно было что-то вложить, например так:
// <Layout>
//    <App /> 
// </Layout> 
// то нужно вложить в аргументы {children} и использовать в jsx
const Layout = ({children}) => {
    return (
        <div className='layout'>{children}</div>
    )
};


export default Layout;