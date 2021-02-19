import React from 'react';
import { Image } from 'semantic-ui-react';
// utils
import { capitalize } from '../../utils/textUtils';
// style
import s from './styles/info.module.css';

const Info = ({username, first_name, last_name, photo_url}) => {
    
    const fullName = capitalize(first_name) + ' ' + capitalize(last_name);

    return (
        <div className={s.container}>
            <div className={s.left}>
                <Image src={photo_url} circular size="small" />
            </div>

            <div className={s.right}>
                <h1 className={s.title}>{fullName}</h1>
                <h2 className={s.title}>{'@' + username}</h2>
            </div>
        </div>
    );
}
 
export default Info;