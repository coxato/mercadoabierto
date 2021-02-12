import React from 'react';
import CustomHead from '../components/Head/head';
// components
import AppLayout from '../components/Layouts/appLayout';
import ReactMarkdown from 'react-markdown';
// markdown
import content from '../blogEntries/aboutMercadoabierto.md';

const AboutPage = () => {
    return (
        <>
            <CustomHead title="About mercadoabierto" />
        
            <AppLayout>
                <ReactMarkdown source={content} />
            </AppLayout>
        </>
    );
}
 
export default AboutPage;