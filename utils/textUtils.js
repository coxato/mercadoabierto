// some utils for text

function capitalize(str) {
    const txt = str.toLowerCase();
    
    return txt[0].toUpperCase() + txt.substring(1);
}

/**
 * 
 * @description capitalize first letter and slice if is necessary
 * @param {String} str 
 * @param {Number} maxLength 
 * @returns {String} string
 */
function cutText(str, maxLength = 30) {
    const txt = str.substring(0, maxLength);

    const dots = str.length > maxLength ? '...' : '';

    return capitalize(txt) + dots;
}

export {
    cutText,
    capitalize
}