import Document, { Html, Head,  Main, NextScript } from 'next/document';

class MyExtendedDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/autocomplete.css" />
                    <link rel="icon" type="image/png" href="/images/logo-v3.png" />
                    <meta name="description" content="Mercadoabierto " />
                    <meta property="og:image" content="/images/logo-social-media.jpg" />

                    <meta property="og:title" content="Mercadoabierto" />
                    <meta property="og:site_name" content="Mercadoabierto"/>
                    <meta property="og:description" content="The best marketplace for sell and buy tech." />
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