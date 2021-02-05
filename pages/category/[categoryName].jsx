import React from 'react';
import ProductsListLayout from '../../components/Layouts/productsListLayout';
import productRequests from '../../requests/products';

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
                productsData: response
            }
        }
    } catch (error) {
        console.error("[error getting category from server]", error);
        return {
            notFound: true
        }
    }
}

const CategoryPage = ({productsData}) => {
    return <ProductsListLayout productsData={productsData}/>
}
 
export default CategoryPage;