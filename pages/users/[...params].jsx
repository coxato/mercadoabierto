import React from 'react';
// request
import userRequests from '../../requests/user';
// components
import ProfileContainer from '../../components/Profile/profileContainer';
import CustomHead from '../../components/Head/head';

export const getServerSideProps = async ({ query }) => {
    const [username, profileTab] = query.params;
     
    try {
        const basicInfo = await userRequests.getUserByUsername(username);
        
        if(!basicInfo) return { notFound: true }

        return {
            props: {
                basicInfo,
                profileTab: profileTab || null
            }
        }

    } catch ({message}) {
        console.error('[Error getting user by username] ' + message);
        return {
            notFound: true,
        }
    }
}

const UserPage = ({ basicInfo, profileTab }) => {
    return (
        <>
            <CustomHead title={basicInfo.username + ' profile | Mercadoabierto'} />
            <ProfileContainer {...{basicInfo, profileTab}} />
        </>
    );
}
 
export default UserPage;