import React from 'react';
// components
import AppNavbar from '../Navs/appNavbar';
import Footer from '../Footers/footer';
// style
import s from './appLayout.module.css';

const AppLayout = ({ children }) => {
    return (
        <div className={s.container}>
            <AppNavbar />

            {children}

            <Footer />
        </div>
    );
}
 
export default AppLayout;