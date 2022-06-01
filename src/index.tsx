import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import "./global/styles/global.css"
import { Navbar } from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);