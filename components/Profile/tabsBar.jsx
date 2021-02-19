import React from 'react';

const TabsBar = ({ handleTabChange }) => {
    return (
        <div className="container">
            <div className="tab" onClick={() => handleTabChange("sales")}>
                Products on Sale
            </div>
            <div className="tab" onClick={() => handleTabChange("purchases")}>
                Purchased products
            </div>
            <div className="tab" onClick={() => handleTabChange("reward")}>
                Rewards
            </div>
        </div>
    );
}
 
export default TabsBar;