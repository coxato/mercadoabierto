import React from 'react';
import PropTypes from 'prop-types';
// loaders
import InstagramType from './simpleLoaders/instagramType';

const LoadersHoc = ({ name, color }) => {
    const loaders = {
        'instagram': <InstagramType {...{color}} />
    }

    return (
        <div className="loadersHOC">
            {loaders[name]}
        </div>
    )
}

const SimpleLoader = ({ name, color }) => {
    return <LoadersHoc {...{name, color}} />;
}

SimpleLoader.propTypes = {
    name: PropTypes.oneOf(["instagram"]).isRequired,
    color: PropTypes.string
}
 
 
export default SimpleLoader;