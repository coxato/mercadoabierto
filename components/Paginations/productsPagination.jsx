import React, { useContext } from 'react';
import { Pagination } from 'semantic-ui-react';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsPagination = () => {
    
    const {
        productsData: { currentPage, totalPages },
        reloadWithPagination,
        paramsEnum
    } = useContext(ProductListContext);

    return (
        <div className="container">
            {
                totalPages > 0 && (
                    <Pagination
                        onPageChange={
                            (_, { activePage }) => reloadWithPagination(activePage)
                        }
                        activePage={currentPage}
                        totalPages={totalPages}
                        firstItem={null}
                        lastItem={null}
                    />
                )
            }
            <style jsx>{`
                .container{
                    margin: 20px 0 30px 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}
 
export default ProductsPagination;