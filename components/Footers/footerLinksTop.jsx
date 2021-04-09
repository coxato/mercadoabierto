import React from 'react';
import Link from 'next/link';
import s from './footer.module.css';

const FooterLinksTop = () => {
    return (
        <div className={s.topContainer}>
            <div className={s.column}>
                <div className={s.linkTitle}>About</div>
                <Link href="/about"><a className={s.link}>About mercadoabierto</a></Link>
            </div>

            <div className={s.column}>
                <div className={s.linkTitle}>Account</div>
                <Link href="/signup"><a className={s.link}>Create account</a></Link>
                <Link href="/login"><a className={s.link}>Login</a></Link>
            </div>

            <div className={s.column}>
                <div className={s.linkTitle}>Other sites</div>
                <a className={s.link} href="https://github.com/coxato/mercadoabierto" target="_blank" rel="noopener noreferrer">
                    Mercadoabierto github
                </a>
                <a className={s.link} href="https://github.com/coxato" target="_blank" rel="noopener noreferrer">
                    Carlos Martínez github
                </a>
                <a className={s.link} href="https://coxato.dev" target="_blank" rel="noopener noreferrer">
                    Carlos Martínez website
                </a>
            </div>
        </div>
    );
}
 
export default FooterLinksTop;