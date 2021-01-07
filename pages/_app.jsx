import React from 'react';
import router from 'next/router';
import NProgress from 'nprogress';

// global styles
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'semantic-ui-css/semantic.min.css';
import 'nprogress/nprogress.css';
import '../global.css';

// HOC's
import UserHOC from '../store/user';
import CartHOC from '../store/cart';
import ProductCreationHOC from '../store/product';
import InitStoreHOC from '../store/initStoreHOC';

//Binding router events to nprogress. 
router.events.on('routeChangeStart', () => NProgress.start()); 
router.events.on('routeChangeComplete', () => NProgress.done()); 
router.events.on('routeChangeError', () => NProgress.done());


const App = ({ Component, pageProps }) => {
    return (
        <UserHOC>
            <CartHOC>
                <ProductCreationHOC>
                    <InitStoreHOC>
                        <Component {...pageProps} />
                    </InitStoreHOC>
                </ProductCreationHOC>
            </CartHOC>
        </UserHOC>
    );
}
 
export default App;