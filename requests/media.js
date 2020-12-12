import request from './request';
import config from '../config';
import { storage } from '../firebase';

const BASE_URL = config.api.baseUrl;

const mediaRequests = {};

/**
 * =============================================================
 * ===== functions to save files in firebase cloud storage ===== 
 * =============================================================
 */

/**
 * @param {object} { file, uploadUrl, progressCallback }
 * @returns {Promise<string>} The downloadUrl
 */
mediaRequests.uploadFile = function({ file, uploadUrl, progressCallback = ()=>{} }){
    return new Promise((resolve, reject) => {

        if (file) {
            // upload
            const uploadTask = storage.ref().child(uploadUrl).put(file);
            
            // check upload process
            uploadTask.on('state_changed',
                // progress
                (snapshot) => {
                    let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    progressCallback(progress);  
                },

                // error
                (err) => { reject("[error uploading file to cloud storage] " + err.message ) },
                
                // success
                () => {
                    uploadTask.snapshot.ref.getDownloadURL()
                        .then((downloadURL) => {
                            resolve(downloadURL)
                        });
                });
        }
    });
}

/**
 * @param {object} { fileUrl, successCallback, errorCallback }
 * @returns {Promise<void>}
 */
mediaRequests.deleteFile = async function({ fileUrl, successCallback = ()=>{}, errorCallback = ()=>{} }){
    try {
        const fileRef = storage.ref().child(fileUrl);

        await fileRef.delete();

        successCallback('file deleted!');
        
    } catch (err) {
        console.error("[error deleting file] " + err.message);
        errorCallback("error while deleting file");
    }
}

/**
 * ===========================================================================
 * ===== functions to save in mysql the info of files saved in firebase  =====
 * you know, we use firebase to storage files, but mysql to save everything else
 * =========================================================================== 
 */


/**
 * @param {object} { photoData, successCallback, errorCallback }
 * @returns {Promise<void>}
 */
mediaRequests.savePhotoData = async function({
    photoData,
    successCallback = ()=>{},
    errorCallback = ()=>{},
}){
    try {
        await request.post(`${BASE_URL}/products/media`, photoData, { token: true });
        successCallback(photoData.photo_url);

    } catch (err) {
        console.error("error saving photo data in server " + err.message);
        errorCallback("error saving photo data");
    }
}


/**
 * @param {object} { photo_fullname, successCallback, errorCallback }
 * @returns {Promise<void>}
 */
mediaRequests.deletePhotoData = async function({
    photo_fullname,
    successCallback = ()=>{},
    errorCallback = ()=>{},
}){
    try {
        await request.delete(
            `${BASE_URL}/products/media/${photo_fullname}`,
            {},
            { token: true }
        );
        successCallback();

    } catch (err) {
        console.error("error deleting photo data in server " + err.message);
        errorCallback("error deleting photo");
    }
}


export default mediaRequests;