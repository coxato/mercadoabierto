import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';

// HOC's
import ProductCreationHOC from '../store/product';

const App = ({ Component, pageProps }) => {
    return (
        <ProductCreationHOC>
            <Component {...pageProps} />
        </ProductCreationHOC>
    );
}
 
export default App;