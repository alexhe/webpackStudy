import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log("haha # render...");

root.render(
    <React.StrictMode>
        <div>hello index.js</div>
        <App></App>
    </React.StrictMode>
)