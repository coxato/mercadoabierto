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
        <Card fluid className={s.cardHover}>
            <Card.Content extra />

            <Link href={`/product/${id_product}`}>
                <a>
                    <img src={cover} className={s.cover}/>    
                </a>
            </Link>
            
            <Card.Content>
                <Link href={`/product/${id_product}`}>
                    <a>
                        <h2 className={s.price}>USD$ {price}</h2>
                        
                        <h2 className={s.title}>
                            {cutText(title)}
                        </h2>   
                        
                        <Card.Meta>
                            <span>{parseInt(isNew) ? 'New' : 'Used'}</span>
                        </Card.Meta>
                    </a>
                </Link>
            </Card.Content>
        </Card>
    )
}

export default ProductCard