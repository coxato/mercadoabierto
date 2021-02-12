import React from 'react';
import CustomHead from '../../components/Head/head';
import ProductsListLayout from '../../components/Layouts/productsListLayout';
import productRequests from '../../requests/products';
// utils
import { capitalize } from '../../utils/textUtils';

export async function getServerSideProps({ params, query }){
    const category = params.categoryName;

    try {
        const response = await productRequests.getProductsByCategory(category, query);

        if(response.error){
            return {
                notFound: true
            }
        }

        return {
            props: {
                productsData: response,
                category
            }
        }
    } catch (error) {
        console.error("[error getting category from server]", error);
        return {
            notFound: true
        }
    }
}

const CategoryPage = ({productsData, category}) => {
    return (
        <>
            <CustomHead title={capitalize(category)} />

            <ProductsListLayout productsData={productsData}/>
        </>
    ); 
}
 
export default CategoryPage;