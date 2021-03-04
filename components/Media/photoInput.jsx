import React, { useRef } from 'react';

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
            <p>Click or tap, for add photo</p>

            <input type="file" ref={inputRef} onChange={handleChange} />

            <style jsx>{`
                .container{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    background: white;
                }

                input{ display: none; }

                p{
                    color: black;
                    font-weight: bolder;
                    font-size: 20px
                }
            `}</style>
        </div>
    );
}
 
export default PhotoInput;