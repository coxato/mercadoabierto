import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../global.css';


const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
}
 
export default App;