import React, { useState, useEffect } from 'react';
import ProductCard from '../Cards/productCard';
// request
import productRequest from '../../requests/products';
// utils
import { getStorageValues, cleanStorageValues } from '../../utils/localStorage';
// style
import s from './styles/historyHome.module.css';

const HistoryHome = () => {
    const [products, setProducts] = useState([]);

    const getProductsData = async (historyIds) => {
        try {
            let _products = [];

            for(let id of historyIds){
                let { productData } = await productRequest.getProductById(id);
                
                if(productData){
                    _products.push(productData);
                }
                
            }
            setProducts(_products);

        } catch ({message}) {
            console.error(message);
        }
    }

    const handleDelete = () => {
        cleanStorageValues('historyIds-ma');
        setProducts([]);
    }

    // check if user have seen products
    useEffect(() => {
        const historyIds = getStorageValues('historyIds-ma');
        
        if(historyIds){
            // get the 6 fisrt ids for now, implement carousel in future for all.
            getProductsData(historyIds.slice(0, 6));
        }
    }, []);


    if(products.length === 0) return null;

    return(
        <div className={s.container}>
            <div className={s.top}>
                <div className={s.title}>Your History</div>
                <div className={s.delete} onClick={handleDelete}>Delete history</div>
            </div>

            <div className={s.bottom}>
                {
                    products.map( (item, idx) => (
                        <ProductCard {...item} key={idx} />
                    ))
                }
            </div>
            
        </div>
    )
}
 
export default HistoryHome;