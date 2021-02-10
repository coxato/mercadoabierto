import React from 'react';
import AppLayout from '../Layouts/appLayout';
import HomeCarousel from '../Carousels/homeCarousel';

const Home = () => {
    return (
        <AppLayout>
            <HomeCarousel />
            <div style={{backgroundColor: 'blueviolet', width: '100%', height: '200px'}} />
        </AppLayout>
    );
}
 
export default Home;