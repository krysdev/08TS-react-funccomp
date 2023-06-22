import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Parent } from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import UserSearchREF from './refs/UserSearchAndREF';
import CompWithEvents from './events/compWithEvents';


function App() {
  return (
    <div>
      XxXXX
      <Parent />
      <br /><hr /><br />
      <GuestList />
      <br /><hr /><br />
      <UserSearch/>
      <br /><hr /><br />
      <UserSearchREF/>
      <br /><hr /><br />
      <CompWithEvents/>
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
