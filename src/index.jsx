// иерархия компонентов: 
// index.html -> 
// index.jsx(Layout.jsx)-> 
// App.jsx(ListMenu + Routing: Home.jsx, About.jsx, Error.jsx) -> 
// Home.jsx -> {TodoItem -> Check}


// index.jsx - рендерит.
// То есть вызывет ReactDOM.createRoot(HTML-element...).render(components...) 
import React from 'react';
import ReactDOM from 'react-dom/client';
// общий макет
import Layout from './components/layout/Layout';

// styles
import './index.css';

import App from './App';
// import reportWebVitals from './reportWebVitals'; // стандартные тесты на производительность, пока не важно

// вставляет в блок <div id="root"></div> в index.html (public)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Layout - это общий макет, который обертывает App, такое увидел в видео 23:49: https://youtu.be/sAa71agGwcg?t=1429 */}
    <Layout>
      <App />
    </Layout>
    
  </React.StrictMode>
);


// аналитические данные на производительность - закоментил вызов reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
