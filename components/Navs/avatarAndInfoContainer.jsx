import React, { useState } from 'react';
import { Popup } from 'semantic-ui-react';
// components
import AvatarAndInfo from './avatarAndInfo';
import PopupContent from './popupContent';

const AvatarAndInfoContainer = () => {
    return (
        <div className="container">
            <Popup
                trigger={<div><AvatarAndInfo /></div>}
                content={<PopupContent />}
                position="bottom right"
                pinned
                on="click"
            />
        </div>
    );
}
 
export default AvatarAndInfoContainer;