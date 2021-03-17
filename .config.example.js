/**
 * this is an example file for config.js
 * just fill the values for your app
 * and rename this file to config.js
 */

const config = {
    // put here your firebase config
    firebase: {
        apiKey: process.env.API_KEY || "",
        authDomain: process.env.AUTH_DOMAIN || "",
        projectId: process.env.PROJECT_ID || "",
        storageBucket: process.env.STORAGE_BUCKET || "",
        messagingSenderId: process.env.MESSAGING_SENDER_ID || "",
        appId: process.env.APP_ID || ""          
    },

    // your data API
    api: {
        // this is for your own rest API or 3rd party API 
        baseUrl: 'http://localhost:5000/api'
    }


}

export default config;