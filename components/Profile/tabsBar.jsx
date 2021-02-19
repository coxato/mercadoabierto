import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
// store
import { useUserInfo } from '../../store/user';
// utils
import { getScreenData } from '../../utils/screen';
// style
import s from './styles/tabsBar.module.css';

const tabData = [
    {
        key: 'sales',
        tabName: 'sales',
        tabText: 'On sale',
        icon: 'grid layout',
        isPrivate: false
    },
    {
        key: 'purchases',
        tabName: 'purchases',
        tabText: 'Purchases',
        icon: 'tag',
        isPrivate: true
    },
    {
        key: 'reward',
        tabName: 'reward',
        tabText: 'Rewards',
        icon: 'dollar',
        isPrivate: true
    },
]

const TabsBar = ({ currentTab, setCurrentTab }) => {
    const { username } = useUserInfo();
    const { query: { params } } = useRouter();
    const { isMobile } = getScreenData();

    return (
        <div className={s.container}>
            {
                tabData.map( ({key, tabName, tabText, icon, isPrivate}) => {
                    if(params[0] !== username && isPrivate) return null;

                    return (
                        <div 
                            key={key} 
                            className={`${s.tab} ${currentTab === tabName ? s.active : ''}`}
                            onClick={() => setCurrentTab(tabName)}
                        >
                            <Icon name={icon} />
                            {isMobile ? '' : tabText}
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default TabsBar;