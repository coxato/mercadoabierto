import React from 'react';
// global styles
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

// HOC's
import UserHOC from '../store/user';
import CartHOC from '../store/cart';
import ProductCreationHOC from '../store/product';

const App = ({ Component, pageProps }) => {
    return (
        <UserHOC>
            <CartHOC>
                <ProductCreationHOC>
                    <Component {...pageProps} />
                </ProductCreationHOC>
            </CartHOC>
        </UserHOC>
    );
}
 
export default App;