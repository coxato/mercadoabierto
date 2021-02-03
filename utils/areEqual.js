// Compare if tow objects are equal.

// just for one level
function areEqualSimple(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;

    for(let k of keys1){
        if(obj1[k] !== obj2[k]){
            return false;
        }
    }

    return true;
}

export {
    areEqualSimple
}