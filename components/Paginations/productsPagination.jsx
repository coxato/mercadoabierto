import React, { useContext } from 'react';
import { Pagination } from 'semantic-ui-react';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsPagination = () => {
    
    const {
        productsData: { currentPage, totalPages },
        reloadPageWithParams,
        paramsEnum
    } = useContext(ProductListContext);

    const handlePageChange = (ev, dataObj) => {
        reloadPageWithParams(paramsEnum.page, dataObj.activePage);
    }

    return (
        <div className="container">
            {
                totalPages > 0 && (
                    <Pagination
                        onPageChange={handlePageChange}
                        activePage={currentPage}
                        totalPages={totalPages}
                        firstItem={null}
                        lastItem={null}
                    />
                )
            }
            <style jsx>{`
                .container{
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}
 
export default ProductsPagination;