import React from 'react';
import { createPortal } from 'react-dom';
// loaders
import Cubes from './fullPageLoaders/cubes';
// style
import s from './loaders.module.css';

const getLoader = (type, size) => {
    const loaders = {
        cubes: <Cubes size={size} />
    }

    return loaders[type]
}

const FullPageLoader = ({ type = 'cubes', size = 'normal'}) => {
    return (
        <div className={s.fullpagePortal}>
            <div>
                {
                    getLoader(type, size)
                }
            </div>
        </div>
    )
}
 
export default FullPageLoader;