import React from 'react';
import { Icon } from 'semantic-ui-react';
import s from './footer.module.css';

const FooterBottom = () => {
    return (
        <div className={s.bottomContainer}>
            <div className={s.bottomLeft}>
                <div className={s.copyright}>Mercadoabierto © 2020-{new Date().getFullYear()}</div>
                
                <div className={s.linkBottom}>
                    Mercadoabierto by <a href="https://coxato.dev" target="_blank" rel="noopener noreferrer">
                        Carlos Martínez
                    </a>
                </div>
            </div>

            <div className={s.bottomRight}>
                <a href="https://github.com/coxato/mercadoabierto" target="_blank" rel="noopener noreferrer">
                    <Icon size="big" color="grey" name="github" />
                </a>
            </div>
        </div>
    );
}
 
export default FooterBottom;