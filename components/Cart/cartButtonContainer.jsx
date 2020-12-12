import React from 'react';
import { Input } from 'semantic-ui-react';

const AddToCartButtonContainer = ({productId, avaliableQty}) => {
    return (
        <div className="container">
            <Input
                action={{
                    color: 'blue',
                    labelPosition: 'left',
                    icon: 'cart',
                    content: 'Add to cart',
                }}
                actionPosition='left'
                placeholder='Quantity'
                defaultValue='1'
                type="number"
                min="1"
                max={avaliableQty}
            />
            <style jsx>{`
                .container{
                    padding: 30px 0;
                }
            `}</style>
        </div>
    );
}
 
export default AddToCartButtonContainer;