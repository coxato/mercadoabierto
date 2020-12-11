import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import s from './products.module.css';

const BasicInfo = ({ title, price, quantity, new: _new }) => {
    return (
        <div className={s.basicInfoCont}>
            <Header as="h1" content={title} />

            <Header as="h2" content={'$' + price}  />

            <Header as="h4" content={ _new ? 'new' : 'used' }  />

            <Button primary size="huge" >{quantity} Buy</Button>
        </div>
    );
}
 
export default BasicInfo;