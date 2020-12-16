import React from 'react';
// components
import Breadcrumb from '../Breadcrumb/productsBreadcrumb';
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
                breadcrumbComponent={<Breadcrumb {...productData} />}
                photosComponent={<DetailPhotoGallery photos={photos} />}
                basicInfoComponent={<BasicInfo {...productData} />}
                fullInfoComponent={<FullInfo {...{productData, sellerData}} /> }
            />
        </AppLayout>
    )
}

export default ProductDetail;