import React from 'react';
import s from './dash.module.css';

const Dash = ({ size }) => {
    return (
        <div className={s.container}>
            <div className={`${s.dash} ${s.uno}`}></div>
            <div className={`${s.dash} ${s.dos}`}></div>
            <div className={`${s.dash} ${s.tres}`}></div>
            <div className={`${s.dash} ${s.cuatro}`}></div>
        </div>
    );
}
 
export default Dash;