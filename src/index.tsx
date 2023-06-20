import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Parent } from './props/Parent';

function App() {
  return (
    <div>
      XxXXX
      <Parent />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
