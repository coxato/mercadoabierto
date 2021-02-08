import React from 'react';
import Link from 'next/link';
import { Card } from 'semantic-ui-react'
// utils
import { cutText } from '../../utils/textUtils';
// style
import s from './productCard.module.css';

const ProductCard = (props) => {

    const { title, id_product, cover, price, 'new': isNew } = props;

    return(
        <Card fluid>
            <Card.Content extra />

            <Link href={`/product/${id_product}`}>
                <a className={s.coverContainer}>
                    <img src={cover} className={s.cover}/>
                </a>
            </Link>
            
            <Card.Content>
                <h2 className={s.price}>USD$ {price}</h2>
                
                <Link href={`/product/${id_product}`}>
                    <a>    
                        <h2 className={s.title}>
                            {cutText(title)}
                        </h2>
                    </a>
                </Link>
                
                <Card.Meta>
                    <span>{parseInt(isNew) ? 'New' : 'Used'}</span>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default ProductCard