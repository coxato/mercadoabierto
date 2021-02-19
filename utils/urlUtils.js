/**
 * Utils for parse url's
 */

 const getLastPath = (path = null) => {
    if(!path)path = window.location.pathname; 
    
    return path.split('/').pop();
 }

const getCategoryFromPath = (path = null) => {
    if(!path)path = window.location.pathname; 
    
    if(/category/.test(path)){
       return getLastPath(path);
    }
    return '';
}


const getSearchQuery = () => {
    const searchURI = window.location.pathname.split('/').pop();
    return decodeURIComponent(searchURI);
}

const getSearchText = () => {
    return getCategoryFromPath() || getSearchQuery();
}

const getProductsPathName = () => {
    const pathName = window.location.pathname;
    let path = '';
    // it's category pathname
    if(/\/category\/.+/.test(pathName)){
        const categoryName = getCategoryFromPath(pathName);
        path = `/category/${categoryName}/`;
    }
    // it's search pathname
    else if(/\/search\/.+/.test(pathName)){
        const search = getSearchQuery();
        path = `/search/${search}`;
    }

    return path;
}


const getParsedUrlOfProducts = (queryParamsObj) => {
    let parsedUrl = getProductsPathName();
    const params = new URLSearchParams();

    for(let [key, value] of Object.entries(queryParamsObj)){
        if(value){
            params.set(key, value);
        }
    }

    return parsedUrl + '?' + params.toString();
}



export { 
    getProductsPathName, 
    getParsedUrlOfProducts,
    getCategoryFromPath,
    getSearchQuery,
    getSearchText,
    getLastPath
}