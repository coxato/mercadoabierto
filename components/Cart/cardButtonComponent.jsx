import React from 'react';
import { Input } from 'semantic-ui-react';

const AddToCartButtonComponent = ({avaliableQty, handleChange, value, handleClick, loading, canBuy}) => {

    return (
        <div className="container">
            <Input
                action={{
                    color: 'blue',
                    labelPosition: 'left',
                    icon: 'cart',
                    content: 'Add to cart',
                    onClick: handleClick,
                    loading
                }}
                actionPosition='left'
                placeholder='Quantity'
                defaultValue='1'
                type="number"
                min={1}
                max={avaliableQty}
                onChange={(_, data) => handleChange(parseInt(data.value)) }
                defaultValue={value}
            />
            <p><i>{canBuy ? '' : `You don't have enough money to buy ${value} items`}</i></p>

            <style jsx>{`
                .container{
                    padding: 30px 0;
                    margin-top: 25px;
                }
            `}</style>
        </div>
    );
}
 
export default AddToCartButtonComponent;