import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Image, List, Header, Segment } from 'semantic-ui-react'
// store
import { useCartInfo, useCart } from '../../store/cart';
import { useUserInfo } from '../../store/user';
// request
import cartRequests from '../../requests/cart';
// style
import s from './itemList.module.css';


const CartItemList = ({ items, handleShowPay }) => {
    const cartState = useCartInfo();
    const { removeItem } = useCart();
    const userData = useUserInfo();
    
    const [cartItems, setCartItems] = useState(items);
    const [isDeleting, setIsDeleting] = useState(false);

    // put items from store in an array and set state
    const parseItemsFromStore = () => {
        const itemsCopy = {...cartState}
        delete itemsCopy.totalItemsQty;

        const itemsParsed = Object.values(itemsCopy);

        console.log("the itemsParsed", itemsParsed);

        setCartItems(itemsParsed);
    } 

    // delete item from cart
    const handleDeleteItem = async (id_product) => {
        try {
            setIsDeleting(true);
            // remove from DB
            const deleted = await cartRequests.deleteItemFromCart(userData.id_user, id_product);

            // remove from context store
            if(deleted) removeItem(id_product);

            parseItemsFromStore();

            setIsDeleting(false);
        } catch (err) {
            console.error('error deleting item from list', err.message);
            setIsDeleting(false);
        }
    }

    // if cart is empty
    if(items?.length === 0 || cartState.totalItemsQty === 0){
        return(
            <div className={s.container}>
                <Segment textAlign="center" padded>
                    <Header as="h1" content="You don't have items in cart yet" />
                    <Link  href="/">
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
                        cartItems.map( (item, idx) => {
                            const { cover, title, price, id_product } = item;
                            const quantity = cartState[id_product]?.quantity;

                            return(
                                <List.Item key={idx}>
                                    <List.Content floated='right' className={s.btn}>
                                        <Button 
                                            onClick={() => handleDeleteItem(id_product)}
                                            color="red"
                                            loading={isDeleting}
                                        >
                                                Delete
                                        </Button>
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