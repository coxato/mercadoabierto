import React from 'react';
// components
import AppLayout from '../Layouts/appLayout';
import Info from './info';
import TabsContainer from './tabsContainer';
// style
import s from './styles/profileContainer.module.css';

const Profile = ({ basicInfo, profileTab }) => {
    return (
        <AppLayout>
            <div className={s.container}>
                <Info {...basicInfo} />
                
                <TabsContainer {...{profileTab}} />
            </div>
        </AppLayout>
    );
}
 
export default Profile;