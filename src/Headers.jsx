import React from "react";

import MenuItem from './MenuItem.jsx';
import './headers.css'


export default () => {
    return <header className="header">
       < MenuItem title = "Головна" />
       < MenuItem title = "Питання" />
       < MenuItem title = "Матеріали" />
       < MenuItem title = "Контакти" />
    </header>
}