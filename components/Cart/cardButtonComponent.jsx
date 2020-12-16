import React from 'react';
import { Input } from 'semantic-ui-react';

const AddToCartButtonComponent = ({avaliableQty, handleChange, value, handleClick, loading}) => {
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
                min="1"
                max={avaliableQty}
                onChange={(_, qty) => handleChange(qty) }
                defaultValue={value}
            />
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