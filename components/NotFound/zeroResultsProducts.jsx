import React from 'react';
import { Message } from 'semantic-ui-react';
// utils
import { getSearchText } from '../../utils/urlUtils';
import { cutText } from '../../utils/textUtils';

const ZeroResultsProducts = () => {
    return (
        <div className="container">
            <Message>
                <Message.Header>
                    0 results found
                </Message.Header>
                <p>
                    Sorry, we don't have {cutText( getSearchText(), 30)}
                </p>
            </Message>
        </div>
    );
}
 
export default ZeroResultsProducts;