// some utils for text

/**
 * 
 * @description capitalize first letter and slice if is necessary
 * @param {String} str 
 * @param {Number} maxLength 
 * @returns {String} string
 */
function cardTitle(str, maxLength = 30) {
    const txt = str.substring(1, maxLength);

    const dots = str.length > maxLength ? '...' : '';

    return str[0].toUpperCase() + txt + dots;
}

export {
    cardTitle
}