import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Buttons} from "./components/Buttons.jsx";
import {Icons} from "./components/Icons.jsx";
import {Typographys} from "./components/Typographys.jsx";
import {Styles} from "./components/Styles.jsx";
import {Global} from "./components/Global.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>,
)
