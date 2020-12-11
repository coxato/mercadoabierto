import React from 'react';
import s from './productDetailLayout.module.css';

const ProductDetailLayout = ({ 
    photosComponent, 
    basicInfoComponent, 
    fullInfoComponent 
}) => {
    return (
        <div className={s.container}>

            <div className={s.upside}>
                <div className={s.photos}>
                    {photosComponent}
                </div>
                <div className={s.basicInfo}>
                    {basicInfoComponent}
                </div>
            </div>

            <div className={s.downside}>
                <div className={s.fullInfo}>
                    {fullInfoComponent}
                </div>
            </div>
            
        </div>
    );
}
 
export default ProductDetailLayout;