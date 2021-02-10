import React from 'react';
import AppLayout from '../Layouts/appLayout';
// components
import HomeCarousel from '../Carousels/homeCarousel';
import CategoriesHome from './categoriesHome';

const Home = () => {
    return (
        <AppLayout>
            <HomeCarousel />
            <CategoriesHome/>
        </AppLayout>
    );
}
 
export default Home;