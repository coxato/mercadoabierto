import React from 'react';
import { Image } from 'semantic-ui-react';
import { useUserInfo } from '../../store/user';
// style
import s from './userLoggedAvatar.module.css';


const UserNavAvatar = () => {
    
    const { username, photo_url } = useUserInfo();

    return (
        <div className={s.container}>
            <Image src={photo_url} size="mini" avatar alt={username + ' avatar'} />
            <span>{username}</span>
        </div>
    );
}
 
export default UserNavAvatar;