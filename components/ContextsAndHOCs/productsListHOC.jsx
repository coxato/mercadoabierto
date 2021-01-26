import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// utils
import { getParsedUrlOfProducts } from '../../utils/urlUtils';

const ProductListContext = createContext();

// like an enum
const paramsEnum = {
    page: 1,
    orderQuery: 2,
    filter: 3,
}

function ProductsListHOC({ children, productsData, currentDevice }) {
    const [productsView, _setProductsView] = useState(productsData.view || 'grid');
    const [orderQuery, setOrderQuery] = useState({orderBy: 'date', order: 'DESC'});
    const [currentPage, setCurrentPage] = useState(productsData.currentPage);
    const [ filter, setFilter ] = useState(productsData.filter || '');
    const [ loading, setLoading ] = useState(true);

    const router = useRouter();

    const isMobile = !(currentDevice === 'desktop');

    // handlers
    const reloadPageWithParams = (type, value) => {
        switch (type) {
            case 1: setCurrentPage(value); break;
            
            case 2: setOrderQuery(JSON.parse(value)); break;

            case 3: setFilter(value); break;
        
            default: return;
        }

        const parsedUrl = getParsedUrlOfProducts({
            page: currentPage,
            view: productsView,
            filter,
            ...orderQuery
        });
        console.log('parsedUrl ', parsedUrl);
        // router.push(parsedUrl);
    }

    const setProductsView = (view) => {
        localStorage.setItem("productsView", view);
        _setProductsView(view);
    }

    useEffect(() => {
        const view = localStorage.getItem("productsView");
        if(view) _setProductsView(view);
        setLoading(false);
    }, []);

    return(
        <ProductListContext.Provider value={{
            currentDevice,
            isMobile,
            productsData,
            productsView,
            setProductsView,
            reloadPageWithParams,
            paramsEnum
        }}>
            { loading ? null : children}
        </ProductListContext.Provider>
    )
}


export {
    ProductsListHOC,
    ProductListContext
};