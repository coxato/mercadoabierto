import React from 'react';
import SimpleHero from '../Heros/simpleHero';
import Footer from '../Footers/footer';
import s from './layoutsStyle/simpleLayout.module.css';

const SimpleLayout = ({ children, heroColor = '' }) => {
    return (
        <div className={s.container}>
            <SimpleHero heroColor={heroColor} />


            <div className={s.childrenContainer}>
                <div className={s.childrenWrapper}>
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
 
export default SimpleLayout;