import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
// utils
import { cleanStorageValues } from '../../utils/localStorage';
// store
import { useUser } from '../../store/user';

const LogoutBtn = () => {
    const router = useRouter();
    const { removeUserInfo } = useUser();

    const handleLogout = () => {
        // clean for localStorage 
        cleanStorageValues('token');
        // clean store
        removeUserInfo();
        // redirect to home
        router.push('/');
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