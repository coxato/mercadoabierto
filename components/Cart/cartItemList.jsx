import React from 'react';
import Link from 'next/link';
import { useCartInfo } from '../../store/cart';
import { Button, Image, List, Header, Segment } from 'semantic-ui-react'
// style
import s from './itemList.module.css';


const CartItemList = ({ items, handleShowPay }) => {

    const cartState = useCartInfo();

    // if cart is empty
    if(items?.length === 0 || cartState.totalItemsQty === 0){
        return(
            <div className={s.container}>
                <Segment textAlign="center" padded>
                    <Header as="h1" content="You don't have items in cart yet" />
                    <Link href="/">
                        <a>
                            <Button color="blue" size="big">Go to buy something</Button>
                        </a>
                    </Link>
                </Segment>
            </div>
        )
    }

    return(
        <div className={s.container}>

            <Segment padded>
                <Header as="h1" textAlign="center">Your cart</Header>

                <List divided verticalAlign='middle'>
                    {
                        items.map( (item, idx) => {
                            const { cover, title, price, id_product } = item;
                            const { quantity } = cartState[id_product];

                            return(
                                <List.Item key={idx}>
                                    <List.Content floated='right' className={s.btn}>
                                        <Button color="red">Delete</Button>
                                    </List.Content>
                                    
                                    <Image rounded size="small" src={cover} />
                                    
                                    <List.Content>
                                        <List.Header>{title}</List.Header>
                                        <span>{quantity} x ${price} = {parseInt(quantity) * parseInt(price)}</span>
                                    </List.Content>
                                </List.Item>
                            )
                        })
                    }
                </List>
                
                <Button 
                    onClick={handleShowPay} 
                    color="blue" 
                    size="large" 
                    fluid
                >
                    Check and pay
                </Button>
            </Segment>
        </div>
    )

}

export default CartItemList