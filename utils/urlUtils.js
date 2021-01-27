/**
 * Utils for parse url's
 */

const getCategoryFromPath = (path = null) => {
    if(!path)path = window.location.pathname; 
    
    if(/category/.test(path)){
       return path.split('/').pop();
    }
    return '';
}


const getSearchQuery = () => {
    const params = new URLSearchParams(window.location.href);
    const search = params.get("q");
    return decodeURIComponent(search);
}


const getProductsPathName = () => {
    const pathName = window.location.pathname;
    let path = '';
    // it's category pathname
    if(/\/category\/.+/.test(pathName)){
        const categ = getCategoryFromPath(pathName);
        path = `/category/${categ}/`;
    }
    // it's search pathname
    else if(/\/search\/.+/.test(pathName)){
        const search = getSearchQuery();
        path = `/search/?q=${search}`;
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
    getSearchQuery
}