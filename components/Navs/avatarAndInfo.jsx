import React from 'react';
import { Image } from 'semantic-ui-react';
import { useUserInfo } from '../../store/user';
// style
import s from './avatarAndInfo.module.css';


const UserNavAvatar = () => {
    
    const { username, photo_url, money } = useUserInfo();

    return (
        <div className={s.container}>
            <div className={s.left}>
                <Image src={photo_url} size="mini" avatar alt={username + ' avatar'} />
            </div>

            <div className={s.right}>
                <div className={s.username}>{username}</div>
                <div className={s.money}>${money}</div>
            </div>
        </div>
    );
}
 
export default UserNavAvatar;