import React from 'react';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
// style
import s from './styles/aboutHome.module.css';

const AboutHome = () => {
    return (
        <div className={s.container}>
            <div className={s.box}>
                <h2 className={s.title}><b>mercadolibre</b> clone</h2>
                <div className={s.content}>
                    This website is a clone for <a href="https://www.mercadolibre.com/" target="_blank" rel="noopener noreferrer">mercadolibre</a>
                    {' '}website. It's one of the best clones out there.
                </div>
                <Link href="/about">
                    <a className={s.button}>
                        Learn more 
                        <Icon name="arrow right" />
                    </a>
                </Link>
            </div>

            <div className={s.box}>
                <h2 className={s.title}>Open Source Project</h2>
                <div className={s.content}>
                    This project is open source. Give me a star!
                    <br/>
                    <p className={s.iywoc}>(if you want of course)</p>
                </div>
                <a className={s.button} href="https://github.com/coxato/mercadoabierto" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" id="githubIcon-about-home" />
                    Github 
                    <Icon name="external" />
                </a>
            </div>
        </div>
    );
}
 
export default AboutHome;