import React from 'react';
import s from './cubes.module.css';

const CubesLoader = ({ size }) => {
    return (
        <div className={s.boxes}>
            <div className={s.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={s.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default CubesLoader;