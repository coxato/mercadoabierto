import React from 'react';
import s from './appLayout.module.css';

const AppLayout = ({ children }) => {
    return (
        <div className={s.container}>
            <h1>NAVBAR</h1>

            {children}

            <h1>FOOTER</h1>
        </div>
    );
}
 
export default AppLayout;