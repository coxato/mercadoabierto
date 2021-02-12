import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/Layouts/appLayout';
import { Header, Image, Button } from 'semantic-ui-react';
import CustomHead from '../components/Head/head';

const NotFoundPage = () => {

    const randomIdx = Math.round(Math.random());
    const imgPath = `/images/not-found${randomIdx}.svg`;

    return (
        <AppLayout>
            <CustomHead  title="Page not found" />
            
            <div className="container">
                <Image src={imgPath} size="medium" />
                <Header size="huge" content="Sorry, this page doesn't exist." />
                <Link href="/">
                    <a>
                        <Button color="blue" size="big">Go to homepage</Button>
                    </a>
                </Link>
            </div>
            <style jsx>{`
                .container{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 75px 0 60px 0;
                }
            `}</style>
        </AppLayout>
    );
}
 
export default NotFoundPage;