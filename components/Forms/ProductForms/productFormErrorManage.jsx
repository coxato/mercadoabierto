import React from 'react';
import { Message, Modal, Button } from 'semantic-ui-react';


const ProductErrorManagement = ({errors, open, setOpen}) => {

    return (
        <div className="container">
            <Modal
                centered={false}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Modal.Header>Check again, some errors occurred</Modal.Header>
                <Modal.Content>
                {
                    (errors?.length) && (
                        <Message
                            error
                            header="Some errors occurred trying to create the product"
                            list={errors}
                        />
                    )
                }
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>OK</Button>
                </Modal.Actions>
            </Modal>

        </div>
    );
}
 
export default ProductErrorManagement;