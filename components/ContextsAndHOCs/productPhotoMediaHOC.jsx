import React, { createContext, useState } from 'react';

const PhotoMediaContext = createContext();

const ProductPhotoMediaHOC = ({ children }) => {
    const [isOngoingProcess, setIsOngoingProcess] = useState(false);

    return (
        <PhotoMediaContext.Provider value={{
            isOngoingProcess,
            setIsOngoingProcess
        }}>
            {children}
        </PhotoMediaContext.Provider>
    );
}

export {
    PhotoMediaContext,
    ProductPhotoMediaHOC
};