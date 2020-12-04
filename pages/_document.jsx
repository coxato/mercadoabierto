import Document, { Html, Head,  Main, NextScript } from 'next/document';

class MyExtendedDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    {/* favicon */}
                    {/* fonts */}
                    {/* stylesheets */}
                    {/* some js scripts */}
                </Head>
                <body className="my-super-custom-css-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyExtendedDocument;