import React from 'react';
import SimpleHero from '../Heros/simpleHero';
import s from './simpleLayout.module.css';

const SimpleLayout = ({ children, heroColor = '' }) => {
    return (
        <div className={s.container}>
            <SimpleHero heroColor={heroColor} />


            <div className={s.childrenContainer}>
                <div className={s.childrenWrapper}>
                    {children}
                </div>
            </div>

            <footer><h1>footer</h1></footer>
        </div>
    );
}
 
export default SimpleLayout;