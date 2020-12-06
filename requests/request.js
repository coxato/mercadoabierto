import axios from 'axios';
import { getToken } from '../utils/token';

const request = {};

const setDefaultOptions = ({ headers, token, cancelToken }) => ({
    headers: {
        ...headers,
        "Content-type": "application/json",
        ...(token && { authorization: `Bearer ${getToken()}` }) 
    },

    ...(cancelToken && { cancelToken })
});

const manageResponse = responseDataObj => {
    const { error, body, status } = responseDataObj;

    if(error) {
        console.error(`${body} \nstatus: ${status}`);
        throw new Error(body);
    }

    return body;
}


request.get = async function(url, options = {}){
    try {
        const { data } = await axios.get(url, setDefaultOptions(options));

        return manageResponse(data);

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}



request.post = async function(url, dataToSend, options = {}){
    try {
        const { data } = await axios.post(url, dataToSend, setDefaultOptions(options));

        return manageResponse(data);

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}


request.delete = async function(url, dataToSend = {}, options = {}){
    try {
        const { data } = await axios.delete(url, {
            ...setDefaultOptions(options),
            data: dataToSend
        })

        return manageResponse(data);

    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}

export default request;