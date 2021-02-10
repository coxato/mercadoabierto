function getScreenData() {
    const width = document.body.clientWidth;
    let isMobile = true, currentDevice;

    if( width >= 801 ){
        isMobile = false;
        currentDevice = 'desktop';
    }
    else if( width < 801 && width >= 540 ){
        currentDevice = 'tablet';
    }
    else{
        currentDevice = 'smartphone';
    }

    return {
        isMobile,
        currentDevice
    }
}

export {
    getScreenData
}