import React from 'react';
import s from './instagram.module.css';

const InstagramTypeLoader = ({ color = 'black', width = 40, height = 40 }) => {
    return (
        <div className="container">
            <div 
                className={`${s.lds_spinner} loader_ins`} 
                style={{width: width+'px', height: height+'px'}}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <style jsx>{`
                .container{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .loader_ins div:after{
                    background: ${color};
                }
            `}</style>
        </div>
    );
}

export default InstagramTypeLoader;