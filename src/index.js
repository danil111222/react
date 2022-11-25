import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// пример создания кнопки через обычный JS
// ReactDOM.render(
//     React.createElement("button", {
//         onClick: () => console.log('CLICK')
//     }, React.createElement(div)),
//     document.getElementById('root')
// );

// Кнопка через JSX (JS + HTML)
import {createRoot} from "react-dom/client";



const root = createRoot(document.getElementById('root'));
root.render(
    <App/>,
);
