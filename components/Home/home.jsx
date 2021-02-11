import React from 'react';
import AppLayout from '../Layouts/appLayout';
// components
import HomeCarousel from '../Carousels/homeCarousel';
import CategoriesHome from './categoriesHome';
import HistoryHome from './historyHome';
import AboutHome from './aboutHome';

const Home = () => {
    return (
        <AppLayout>
            <HomeCarousel />

            <CategoriesHome/>

            <HistoryHome/>
            
            <AboutHome />
        </AppLayout>
    );
}
 
export default Home;