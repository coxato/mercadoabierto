/**
 * Utils for parse url's
 */

const getProductsPathName = () => {
    const pathName = window.location.pathname;
    let path = '';
    // it's category pathname
    if(/\/category\/.+/.test(pathName)){
        const categ = pathName.split('/').pop(),
        cleanCategory = categ.split("?")[0];
        path = `/category/${cleanCategory}/`;
    }
    // it's search pathname
    else if(/\/search\/.+/.test(pathName)){
        const params = new URLSearchParams(window.location.href);
        const search = params.get("q");
        path = `/search/?q=${search}`;
    }

    return path;
}


const getParsedUrlOfProducts = (queryParamsObj) => {
    let parsedUrl = getProductsPathName();
    const params = new URLSearchParams(window.location.search);

    for(let [key, value] of Object.entries(queryParamsObj)){
        if(value){
            params.set(key, value);
        }
    }

    return parsedUrl + '?' + params.toString();
}

export { 
    getProductsPathName, 
    getParsedUrlOfProducts
}