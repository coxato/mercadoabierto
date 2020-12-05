import React,  { useRef } from 'react';
import { Icon } from 'semantic-ui-react';

const PhotoInput = ({ handleSetImage }) => {
    const inputRef = useRef();

    const handleClick = () => inputRef.current.click();

    const handleChange = ev => {
        const file = ev.target.files[0];
        
        if(file) handleSetImage(file);
    
        // reset
        ev.target.value = null;
    }

    return (
        <div className="container" onClick={handleClick}>
            <Icon name="plus circle" size="huge" color="blue" />

            <input type="file" ref={inputRef} onChange={handleChange} />

            <style jsx>{`
                .container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                input{ display: none; }
            `}</style>
        </div>
    );
}
 
export default PhotoInput;