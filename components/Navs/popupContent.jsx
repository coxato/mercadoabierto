import React from 'react';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
// components
import LogoutBtn from '../Logout/logoutBtn';
// store
import { useUserInfo } from '../../store/user';

// popup showed when user clicks on his avatar
const PopupContent = () => {

    const { username } = useUserInfo();

    return (
        <div className="container">
            <div className="link">
                <Link href={`/users/${username}/`}>
                    <a className="text">
                        <Icon name="user" color="grey" />
                        My profile
                    </a>
                </Link>
            </div>
            <div className="link">
                <Link href={`/users/${username}/reward`}>
                    <a className="text">
                        <Icon name="dollar" color="green" />
                        Get reward
                    </a>
                </Link>
            </div>
            <div className="link">
                <a className="text">
                    <LogoutBtn />
                </a>
            </div>

            <style jsx>{`
                .container{
                    text-align: left;
                }

                .text{
                    color: var(--black);
                }
                .link{
                    padding: 5px 2px;
                    border-radius: 5px;
                    transition: .3s;
                }
                .link:hover{
                    background: var(--light);
                }
            `}</style>
        </div>
    );
}
 
export default PopupContent;