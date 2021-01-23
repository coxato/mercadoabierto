import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../Cards/productCard';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const nColumns = {
    'smartphone': 1,
    'tablet': 2,
    'desktop': 3
}

const ProductGridView = ({ products }) => {
    const { currentDevice } = useContext(ProductListContext);

    return (
        <Grid columns={nColumns[currentDevice]} centered>
            {
                products.map( product => (
                    <Grid.Column key={product.id_product}>
                        <div className="column-item">
                            <ProductCard {...product} />
                        </div>
                    </Grid.Column>
                ))
            }
            <style jsx>{`
                .column-item{
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </Grid>
    );
}
 
export default ProductGridView;