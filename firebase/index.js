import firebase from 'firebase/app';
import 'firebase/storage';
import config from '../config';

let storage;

try {

    firebase.initializeApp(config.firebase);
    storage = firebase.storage();

} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('#### Firebase initialization error ####', err.stack)
    }
}


export {
    storage
}

export default firebase;