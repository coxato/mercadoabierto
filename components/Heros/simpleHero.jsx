import React from 'react';
import s from './simpleHero.module.css';

const SimpleHero = ({ heroColor }) => {
    return (
        <div className={s.container} style={{ backgroundColor: heroColor || 'var(--yellow)' }}>
            hero
        </div>
    );
}
 
export default SimpleHero;