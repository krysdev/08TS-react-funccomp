import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Parent } from './props/Parent';
import GuestList from './state/GuestList';

function App() {
  return (
    <div>
      XxXXX
      <Parent />
      <hr />
      <GuestList />
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
