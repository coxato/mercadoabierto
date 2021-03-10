import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
// utils
import { cleanStorageValues } from '../../utils/localStorage';

const LogoutBtn = () => {
    const router = useRouter();

    const handleLogout = () => {
        // clean for localStorage
        cleanStorageValues('userInfo'); 
        cleanStorageValues('token');
        
        // redirect to home
        router.push('/');
    }

    return (
        <div onClick={handleLogout} >
            <Icon name="power off" color="black" />
            Logout
        </div>
    );
}
 
export default LogoutBtn;