import React from 'react';
import Link from 'next/link';
import s from './simpleHero.module.css';

const SimpleHero = ({ heroColor }) => {
    return (
        <div className={s.container} style={{ backgroundColor: heroColor || 'var(--yellow)' }}>
            <div className={s.logoContainer}>
                <Link href="/">
                    <a>
                        <img src="/images/full-logo.png" alt="mercadoabierto logo"/>
                    </a>
                </Link>
            </div>
        </div>
    );
}
 
export default SimpleHero;