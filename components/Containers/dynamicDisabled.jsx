import React from 'react';

const DynamicDisabledDiv = ({ children, disabled = false }) => {
    const styles = disabled ? {
        pointerEvents: 'none',
        opacity: '0.7',
    } : {};

    return (
        <div style={styles} aria-disabled={disabled} >
            {children}
        </div>
    );
}
 
export default DynamicDisabledDiv;