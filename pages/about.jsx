import React from 'react';
import CustomHead from '../components/Head/head';
// components
import AppLayout from '../components/Layouts/appLayout';
import MarkdownBlog from '../components/Markdown/blog';
// markdown
import content from '../blogEntries/aboutMercadoabierto.md';

const AboutPage = () => {
    return (
        <>
            <CustomHead title="About mercadoabierto" />
        
            <AppLayout>
                <div style={{paddingBottom: '40px'}}>
                    <MarkdownBlog content={content} />
                </div>
            </AppLayout>
        </>
    );
}
 
export default AboutPage;