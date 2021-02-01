import React, { useContext } from 'react';
import { Modal, Icon, Header, List } from 'semantic-ui-react';
import { orderOptions } from '../../utils/constants';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';
// style
import s from './mobileModalsMenu.module.css';


function MenuModal({ children, open, setOpen }) {
    return (
        <Modal
            closeIcon={<Icon color="blue" size="big" name="arrow left" />}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dimmer="inverted"
            centered={false}
            style={{padding: '8px'}}
        >
            <Modal.Content>
                <div className={s.modalContainer}>
                    {children}
                </div>
            </Modal.Content>
        </Modal>
    )
}

function MobileFilterMenu({ open, setOpen }) {
    const { reloadProductsCondition, filter } = useContext(ProductListContext);

    return (
        <MenuModal {...{open, setOpen}}>
            <Header as="h1" content="Filter By" />
            <div className={s.separator_d}>
                <h3>Condition</h3>
                <div className={s.newused_d} onClick={() => setOpen(false)}>
                    {
                        !filter && (
                            <>
                                <p onClick={() => reloadProductsCondition('new')}>New</p>
                                <p onClick={() => reloadProductsCondition('used')}>Used</p>
                            </>
                        )
                    }
                    {
                        filter && (
                            <p>
                                You have selected {filter}, <u onClick={() => reloadProductsCondition('')}>remove</u> 
                            </p>
                        )
                    }
                </div>
            </div>
        </MenuModal>
    )
}


function MobileOrderMenu({ open, setOpen }) {
    const { reloadWithOrder } = useContext(ProductListContext);

    return (
        <MenuModal {...{open, setOpen}}>
            <Header as="h1" content="Order By" />
            <div onClick={() => setOpen(false)}>

            </div>
        </MenuModal>
    )
}

export {
    MobileOrderMenu,
    MobileFilterMenu
}