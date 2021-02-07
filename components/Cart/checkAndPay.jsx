import React, { useEffect, useState } from 'react';
import { Table, Button, Header, Modal } from 'semantic-ui-react';
import purchaseRequests from '../../requests/purchase';
// global store
import { useCart } from '../../store/cart';
import { useUserInfo } from '../../store/user';
// style
import s from './checkAndPay.module.css';

const CheckAndPay = ({ items, handleShowPay }) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { voidCart } = useCart();
    const { username } = useUserInfo();

    useEffect(() => {
        const total = items.reduce((current, item) => {
            return current + item.quantity * item.price 
        }, 0);

        setTotalPrice(total);
    }, []);

    const handlePay = async () => {
        setLoading(true);

        await purchaseRequests.purchase(items);
        // void cart
        voidCart();

        setLoading(false);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        // setOpenModal(false);
        handleShowPay();
    }


    return (
        <div className={s.container}>

            <Modal
                size="small"
                open={openModal}
                onClose={handleCloseModal}
            >
                <Modal.Header>Great Purchase {username}!</Modal.Header>
                <Modal.Content>
                    <Header as="h3" content="You can see all your purchases in your profile" />
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={handleCloseModal} content="Ok" />
                </Modal.Actions>
            </Modal>

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