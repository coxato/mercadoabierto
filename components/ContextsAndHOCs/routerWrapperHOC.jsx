import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// store
import { useUser } from '../../store/user';

const RouteWrapperHOC = ({ children, needBeLogged, redirectTo = '/login' }) => {
    
    const [isChecking, setIsChecking] = useState(true);
    const { checkIsLogged } = useUser();
    const router = useRouter();

    useEffect(() => {
        if( (needBeLogged && !checkIsLogged()) || (!needBeLogged && checkIsLogged()) ){
            router.push(redirectTo);
        }
        else{
            setIsChecking(false);
        }
    }, []);

    if(isChecking) return null;

    return (<>{children}</>);
}
 
export default RouteWrapperHOC;