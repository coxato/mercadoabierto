import React from 'react';
import Link from 'next/link';
import { Header, Card, Feed } from 'semantic-ui-react';
// utils
import { getDateStr } from '../../utils/date';
// style
import s from './products.module.css';

const FullInfo = ({ productData, sellerData }) => {
    
    const { description, date } = productData;
    const { 
        id_user: sellerId, 
        username: sellerUsername, 
        photo_url: sellerPhoto 
    } = sellerData;


    return (
        <div className={s.fullInfoCont}>
            <div className={s.fullInfoLeft}>
                <Header textAlign="left" as="h2" >Description:</Header>
                <div className={s.fullInfoDescripton}>
                    {description}
                </div>
            </div>

            <div className={s.fullInfoRight}>
                <div>
                    <Header textAlign="left" as="h2" >Seller:</Header>
                    
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image={sellerPhoto} />
                            <Feed.Content>
                                <Link href={`/users/${sellerId}`}>
                                    <a>
                                        <h3>{sellerUsername}</h3>
                                    </a>
                                </Link>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </div>

                <div>
                    <Header textAlign="left" as="h2">Published date:</Header>
                    <p>{getDateStr(date)}</p>
                </div>
            </div>
        </div>
    );
}
 
export default FullInfo;