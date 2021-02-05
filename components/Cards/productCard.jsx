import React from 'react';
import Link from 'next/link';
import { Card } from 'semantic-ui-react'
// utils
import { cutText } from '../../utils/textUtils';

const ProductCard = (props) => {

    const { title, id_product, cover, price, 'new': isNew } = props;

    return(
        <Card fluid>
            <Card.Content extra />

            <Link href={`/product/${id_product}`}>
                <a>
                    <img src={cover} width="100%" />
                </a>
            </Link>

            <Card.Content extra />
            
            <Card.Content>
                <h2 className="price">USD$ {price}</h2>
                
                <Link href={`/product/${id_product}`}>
                    <a>    
                        <h2 className="title">
                            {cutText(title)}
                        </h2>
                    </a>
                </Link>
                
                <Card.Meta>
                    <span>{parseInt(isNew) ? 'New' : 'Used'}</span>
                </Card.Meta>
            </Card.Content>
            
            <style jsx>
            {`
                .price{
                    color: #333;
                    display: flex;
                    font-size: 24px;
                    font-weight: 500;
                    margin-right: 8px;
                    line-height: 1;
                    font-family
                }

                .title{
                    color: #333;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.3;
                    max-height: 36px;
                    margin-bottom: 0;
                }
            `}
            </style>
        </Card>
    )
}

export default ProductCard