import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductCard from '../Cards/productCard';
// utils
import { getScreenData } from '../../utils/screen';

const nColumns = {
    'smartphone': 1,
    'tablet': 2,
    'desktop': 3
}

const ProductGridView = ({ products }) => {
    const { currentDevice } = getScreenData();

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
                    padding: 14px 16px;
                }
            `}</style>
        </Grid>
    );
}
 
export default ProductGridView;