import React from 'react';
import { Icon } from 'semantic-ui-react';
// utils
import { cleanStorageValues } from '../../utils/localStorage';

const LogoutBtn = () => {
    const handleLogout = () => {
        // clean for localStorage 
        cleanStorageValues('token');
        cleanStorageValues('userInfo');
        // force redirect to home
        window.location.href = '/';
    }

    return (
        <div onClick={handleLogout} className="btn">
            <Icon name="power off" color="black" />
            Logout

            <style jsx>{`
                .btn{
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}
 
export default LogoutBtn;