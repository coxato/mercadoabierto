import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './blog.module.css';

const MarkdownBlog = ({ content }) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <ReactMarkdown source={content} />
            </div>
        </div>
    );
}
 
export default MarkdownBlog;