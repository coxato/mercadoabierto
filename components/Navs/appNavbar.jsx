import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Icon } from 'semantic-ui-react';
// custom hook
import { useUser } from '../../store/user';
// components
import UserLoggedAvatar from './userLoggedAvatar';
import  CartNavbar from './cartNavbar';
import CategoriesNavbar from './categoriesNavbar';
import SearchBar from '../SearchBar/searchBar';
// style
import s from './appNavbar.module.css';

let resizeListener;

const AppNavbar = () => {

    const { checkIsLogged } = useUser();
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(true);
    const [showMenuResponsive, setShowMenuResponsive] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    const handleShow = () => setShowMenuResponsive(!showMenuResponsive);

    useEffect(() => {
        const isLogged = checkIsLogged();
        setIsLogged(isLogged);
        setLoading(false);
    }, []);

    // resize listener
    useEffect(() => {
        setIsLaptop(document.body.clientWidth >= 1080);

        resizeListener = window.addEventListener("resize", () => {
            setIsLaptop(document.body.clientWidth >= 1080);
        })

        return () => {
            window.removeEventListener("resize", resizeListener);
        }
    }, []);

    if(loading) return null;

    return (
        <nav className={s.container}>
            <div className={s.noResponsive}>
                <div className={s.logo}>
                    <Link href="/">
                        <a>
                            {
                                isLaptop 
                                ?
                                <img src="/images/full-logo.png" alt="mercadoabierto logo" width="150"/>
                                :
                                <img src="/images/logo-v3.png" alt="mercadoabierto logo" width="70"/>
                            }
                        </a>
                    </Link>
                </div>

                <div className={s.searchBar}>
                    <SearchBar />
                </div>

                <div className={s.menuIcon} onClick={handleShow}>
                    <Icon name={showMenuResponsive ? 'close' : 'bars'} size="big" color="grey" />
                </div>
            </div>

            <div className={s.responsive} style={{display: showMenuResponsive || isLaptop ? 'flex' : 'none'}}>
                <div className={s.categories}>
                    <CategoriesNavbar />
                </div>

                {
                    isLogged ? (
                        <div className={s.cartAndAvatar}>
                            <CartNavbar />
                            <UserLoggedAvatar />
                        </div>
                    ) : (
                        <div className={s.loginSignup}>
                            <Button.Group fluid>
                                    <Link href="/login">
                                        <a>
                                            <Button basic={!isLaptop} color={ isLaptop ? 'green' : 'blue' } fluid>login</Button>
                                        </a>
                                    </Link>

                                    <Link href="/signup">
                                        <a>
                                            <Button color="blue" fluid >Signup</Button>
                                        </a>
                                    </Link>
                            </Button.Group>
                        </div>
                    )
                }
            </div>



        </nav>
    );


}


 
export default AppNavbar;