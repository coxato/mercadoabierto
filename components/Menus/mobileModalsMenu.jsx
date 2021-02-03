import React, { useContext } from 'react';
import { Modal, Icon, Header, List } from 'semantic-ui-react';
import { orderOptions } from '../../utils/constants';
import { areEqualSimple } from '../../utils/areEqual';
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
                                You have selected {filter},
                                {' '}
                                <u onClick={() => reloadProductsCondition('')}>remove</u> 
                            </p>
                        )
                    }
                </div>
            </div>
        </MenuModal>
    )
}


function MobileOrderMenu({ open, setOpen }) {
    const { reloadWithOrder, orderQuery } = useContext(ProductListContext);

    return (
        <MenuModal {...{open, setOpen}}>
            <Header as="h1" content="Order By" />
            <div className={s.orderOptions}>{
                orderOptions.map( (opt, idx) => {
                    let optParsed = JSON.parse(opt.value);
                    let isSelected = areEqualSimple(optParsed, orderQuery);

                    return(
                        <div onClick={
                            () => {
                                setOpen(false);
                                reloadWithOrder(opt.value);
                            }
                            } 
                            className={`${s.orderOption} ${isSelected ? s.orderActive : ''}`} 
                            key={idx}
                        >
                            <div className={s.optBorder} />
                            <p className={s.optText}>{opt.text}</p>
                        </div>
                    )
                })
            }</div>
        </MenuModal>
    )
}

export {
    MobileOrderMenu,
    MobileFilterMenu
}