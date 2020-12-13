const setStorageValues = (key, objValues = {}) => {
    const jsonStr = JSON.stringify(objValues);

    localStorage.setItem(key, jsonStr);
}


const getStorageValues = (key) => {
    const jsonStr = localStorage.getItem(key);

    if(jsonStr) return JSON.parse(jsonStr); 

    return null;
};


const cleanStorageValues = (key = '') => {
    if(key) localStorage.removeItem(key);
    
    else localStorage.clear();
}


export {
    setStorageValues,
    getStorageValues,
    cleanStorageValues
}