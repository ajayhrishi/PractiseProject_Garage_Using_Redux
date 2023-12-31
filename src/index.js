import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { store } from './store';
import { Provider } from 'react-redux'

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}> <App/> </Provider>);