// some utils for text

/**
 * 
 * @description capitalize first letter and slice if is necessary
 * @param {String} str 
 * @param {Number} maxLength 
 * @returns {String} string
 */
function cutText(str, maxLength = 30) {
    const txt = str.substring(1, maxLength);

    const dots = str.length > maxLength ? '...' : '';

    return str[0].toUpperCase() + txt + dots;
}

export {
    cutText
}