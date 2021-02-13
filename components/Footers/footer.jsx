import React, { useRef, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import FooterTop from './footerLinksTop';
import FooterBottom from './footerLinksBottom';
import s from './footer.module.css';

const Footer = () => {
    const [show, setShow] = useState(false);
    const wrapperRef = useRef();
    const buttonRef = useRef();

    const handleShow = () => {
        const { current } = wrapperRef;

        const childHeight = current.children[0].getBoundingClientRect().height;

        const height = (show ? '0' : childHeight) + 'px'; 

        current.style.height = height;
        buttonRef.current.style.backgroundColor = show ? '#fff' : 'var(--superlight)';
        setShow(!show);
    }

    return (
        <div className={s.container}>

            <div className={s.showMoreBtnWrapper}>
                <div 
                    onClick={handleShow} 
                    ref={buttonRef} 
                    className={s.showMoreBtn}
                >
                    Show more <Icon color="black" name={"chevron " + (show ? 'down' : 'up')} />
                </div>

            </div>
            {/* top footer wrapper, to show and hide  */}
            <div ref={wrapperRef} className={s.topWrapper}>
                <FooterTop />
            </div>

            <FooterBottom />
        </div>
    );
}
 
export default Footer;