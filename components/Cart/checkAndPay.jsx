import React, { useEffect, useState } from 'react';
import { Table, Button, Header } from 'semantic-ui-react';
import purchaseRequests from '../../requests/purchase';
// style
import s from './checkAndPay.module.css';

const CheckAndPay = ({ items, handleShowPay }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const total = items.reduce((current, item) => {
            return current + item.quantity * item.price 
        }, 0);

        setTotalPrice(total);
    }, []);

    const handlePay = async () => {
        setLoading(true);

        await purchaseRequests.purchase(items);

        setLoading(false);
    }


    return (
        <div className={s.container}>

            <Button
                onClick={handleShowPay}
                color="yellow"
                size="medium"
            >
                Return to cart
            </Button>

            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price per unit</Table.HeaderCell>
                        <Table.HeaderCell>Subtotal</Table.HeaderCell>
                        <Table.HeaderCell>TOTAL</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {/* detail items */}
                    {
                        items.map(({ title, price, quantity }, idx) => (
                            <Table.Row key={idx}>
                                <Table.Cell>{title}</Table.Cell>
                                <Table.Cell>{quantity}</Table.Cell>
                                <Table.Cell>{price}</Table.Cell>
                                <Table.Cell>{quantity * price}</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                            </Table.Row>
                        ))
                    }
                    {/* total price row */}
                    <Table.Row>
                        <Table.Cell content="-"/>
                        <Table.Cell content="-"/>
                        <Table.Cell content="-"/>
                        <Table.Cell content="-"/>
                        <Table.Cell>
                            <Header as="h3">{totalPrice}</Header>
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>

            {/* pay button */}
            <Button
                fluid
                color="blue"
                size="huge"
                loading={loading}
                onClick={handlePay}
            >
                Pay ${totalPrice}
            </Button>
        </div>

    );
}
 
export default CheckAndPay;