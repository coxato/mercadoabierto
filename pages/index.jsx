import React from 'react';
import CustomHead from '../components/Head/head';
import Home from '../components/Home/home';

const HomePage = () => {
    return (
        <>
            <CustomHead title="Mercadoabierto - tech marketplace" isHomepage/>
            <Home />
        </>
    );
}
 
export default HomePage;