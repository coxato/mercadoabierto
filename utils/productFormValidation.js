function productFormValidation(productData) {
    const {  
        cover,
        price,
        quantity
    } = productData;

    const errorsArr = [];

    const _price = parseFloat(price), _quantity = parseInt(quantity);

    if(!cover) errorsArr.push('You need to upload at least one photo');

    if(_price <= 0) errorsArr.push("check the price!, can't be free");

    if(_price > 10000) errorsArr.push(`WOW!, really? $${_price} USD dollars?, hey this is not lamborghini.com, MAX is $10000`);

    if(_quantity < 1) errorsArr.push("at least one is needed");

    if(_quantity >= 200) errorsArr.push(`Wow!, we aren't alibaba.com, ${_quantity} items are a lot!, MAX is 200`);

    return {
        errorsArr,
        valid: errorsArr.length === 0
    }
}

export {
    productFormValidation
}