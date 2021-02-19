import React, { useState, useEffect } from 'react';
// components
import SalesTab from './salesTab';
import PurchasesTab from './purchasesTab';
import RewardTab from './rewardTab';
import TabsBar from './tabsBar';

// fake react router, just to set the url pathname
const setLastPath = (newLastPath) => {
    const pathArr = window.location.pathname.split('/');

    // /users/<username>/<tabName> arr.lenght = 4
    if(pathArr.length === 4)pathArr.pop();

    pathArr.push(newLastPath);
    let newPath = pathArr.join('/');
    
    window.history.replaceState(null, '', newPath);
}


const TabHOC = ({ currentTab, ...props }) => {
    const tabs = {
        'sales': <SalesTab {...props} />,
        'purchases': <PurchasesTab {...props} />,
        'reward': <RewardTab {...props} />
    }

    return (
        <div className="tabHoc" {...props}>
            {tabs[currentTab]}
        </div>
    )
}


const ProfileTabsContainer = ({ profileTab }) => {
    const [currentTab, setCurrentTab] = useState(profileTab || 'sales');

    useEffect(() => {
        // don't change last path on 'sales' because is like the homepage of user profile
        const newLastPath = currentTab === 'sales' ? '' : currentTab;
        setLastPath(newLastPath);
    }, [currentTab]);

    return (
        <div className="container">
            <TabsBar handleTabChange={setCurrentTab} />
            
            <TabHOC currentTab={currentTab} />
        </div>
    );
}
 
export default ProfileTabsContainer;