import React, { createContext, useState, useEffect, useRef } from 'react';
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

// products default order or previously order
function defaultOrder({ orderBy, order }) {
    if(orderBy && order){
        return { orderBy, order }
    }
    return {orderBy: 'date', order: 'DESC'};
}


function ProductsListHOC({ children, productsData, currentDevice }) {
    const [productsView, _setProductsView] = useState(productsData.view || 'grid');
    const [orderQuery, setOrderQuery] = useState(defaultOrder(productsData));
    const [currentPage, setCurrentPage] = useState(productsData.currentPage);
    const [ filter, setFilter ] = useState(productsData.filter || '');
    const [ loading, setLoading ] = useState(true);
    const firstTimeRender = useRef(true);

    const router = useRouter();

    const isMobile = !(currentDevice === 'desktop');

    // ======= handlers =======

    const reloadPageWithParams = (type, value) => {
        switch (type) {
            case 1: setCurrentPage(value); break;
            
            case 2: {
                setOrderQuery(() => {
                    setCurrentPage(1);
                    return JSON.parse(value);
                }); 
                break;
            }

            case 3: {
                setFilter(() => {
                    setCurrentPage(1);
                    return value;
                }); 
                break;
            }
        
            default: return;
        }
    }

    // reload products order by date or price
    const reloadWithOrder = (_, data) => {
        reloadPageWithParams(paramsEnum.orderQuery, data.value);
    }

    // reload page with new or used, also reset condition if condition === ''
    const reloadProductsCondition = condition => {
        reloadPageWithParams(paramsEnum.filter, condition);
    }

    // reload page with pagination
    const reloadWithPagination = (newPage) => {
        reloadPageWithParams(paramsEnum.page, newPage);
    }

    const reloadPage = () => {
        const parsedUrl = getParsedUrlOfProducts({
            page: currentPage,
            view: productsView,
            filter,
            ...orderQuery
        });
        router.push(parsedUrl);
    }

    const setProductsView = (view) => {
        localStorage.setItem("productsView", view);
        _setProductsView(view);
    }

    // ======= effects =======

    // check when the values change
    useEffect(() => {
        if(!firstTimeRender.current){
            reloadPage();
        }
    }, [currentPage, orderQuery, filter]);

    // componentDidMount
    useEffect(() => {
        const view = localStorage.getItem("productsView");
        if(view) _setProductsView(view);
        setLoading(false);
        firstTimeRender.current = false;
    }, []);

    // ======= render =======

    // TODO: check if is better put this values in a reducer and use customHooks
    // or just use it like this
    return(
        <ProductListContext.Provider value={{
            currentDevice,
            isMobile,
            productsData,
            productsView,
            setProductsView,
            reloadProductsCondition,
            reloadWithOrder,
            reloadWithPagination,
            orderQuery,
            filter
        }}>
            { loading ? null : children}
        </ProductListContext.Provider>
    )
}


export {
    ProductsListHOC,
    ProductListContext
};