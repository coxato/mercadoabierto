import React from 'react';
// components
import DetailPhotoGallery from '../Photos/detailPhotoGallery';
import BasicInfo from './basicInfo';
import FullInfo from './fullInfo';
// layouts
import DetailLayout from '../Layouts/productDetailLayout';
import AppLayout from '../Layouts/appLayout';

const ProductDetail = ({ productData, photos, sellerData }) => {
    return(
        <AppLayout>
            <DetailLayout
                photosComponent={<DetailPhotoGallery photos={photos} />}
                basicInfoComponent={<BasicInfo {...productData} />}
                fullInfoComponent={<FullInfo {...{productData, sellerData}} /> }
            />
        </AppLayout>
    )
}

export default ProductDetail;