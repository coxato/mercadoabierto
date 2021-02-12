import React, { useEffect } from 'react';
// components
import Breadcrumb from '../Breadcrumb/productsBreadcrumb';
import DetailPhotoGallery from '../Photos/detailPhotoGallery';
import BasicInfo from './basicInfo';
import FullInfo from './fullInfo';
// layouts
import DetailLayout from '../Layouts/productDetailLayout';
import AppLayout from '../Layouts/appLayout';
// utils
import { getStorageValues, setStorageValues } from '../../utils/localStorage';

const ProductDetail = ({ productData, photos, sellerData }) => {

    // save id product to history
    useEffect(() => {
        const historyIds = getStorageValues('historyIds-ma') || [];
        
        if(!historyIds.includes(productData.id_product)){

            historyIds.unshift(productData.id_product);
            setStorageValues('historyIds-ma', historyIds);

        }
    }, []);

    return(
        <AppLayout>
            <DetailLayout
                breadcrumbComponent={<Breadcrumb {...productData} />}
                photosComponent={<DetailPhotoGallery photos={photos} />}
                basicInfoComponent={<BasicInfo {...productData} />}
                fullInfoComponent={<FullInfo {...{productData, sellerData}} /> }
            />
        </AppLayout>
    )
}

export default ProductDetail;