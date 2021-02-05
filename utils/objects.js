// utils for manage objects

/**
 * 
 * @param {object} objToMix 
 * @param {object} objWithDefaultValues 
 * @returns {object} An new mixed object with all valid values
 */
function mix(objToMix, objWithDefaultValues) {
    const mixed = {};

    for(let key in objWithDefaultValues){
        if(objToMix[key]){
            mixed[key] = objToMix[key];
        }
        else mixed[key] = objWithDefaultValues[key];
    }

    return mixed;
}

export default {
    mix
}