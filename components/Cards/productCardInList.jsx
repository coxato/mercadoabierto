import React from 'react';
import Link from 'next/link';
import { List } from 'semantic-ui-react'
// utils
import { cutText } from '../../utils/textUtils';
// style
import s from './productCardInList.module.css';

const ProductCard = (props) => {

    const { title, id_product, cover, price, 'new': isNew } = props;

    return(
        <List.Item>
            <div className={s.container}>
                <div className={s.left}>
                    <Link href={`/product/${id_product}`}>
                        <a>
                            <img className={s.cover} src={cover} alt={title}/>
                        </a>
                    </Link>
                </div>

                <div className={s.right}>
                    <Link href={`/product/${id_product}`}>
                        <a>
                            <h2 className={s.title}>{cutText(title)}</h2>
                        </a>
                    </Link>
                    <h3 className={s.price}>USD$ {price}</h3>
                    <p>{isNew ? 'New' : 'Used'}</p>
                </div>
            </div>
        </List.Item>
    )
}

export default ProductCard