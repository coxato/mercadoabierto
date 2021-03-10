import Document, { Html, Head,  Main, NextScript } from 'next/document';

class MyExtendedDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/autocomplete.css" />
                    <link rel="icon" type="image/png" href="/images/logo-v3.png" />
                    <meta name="description" content="Mercadoabierto " />

                    <meta property="og:title" content="Mercadoabierto" />
                    <meta property="og:site_name" content="Mercadoabierto"/>
                    <meta property="og:description" content="The best marketplace for sell and buy tech." />
                    <meta property="og:image" content="https://mercadoabierto.vercel.app/images/og.png" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="mercadoabierto.vercel.app" />
                    <meta property="twitter:url" content="https://mercadoabierto.vercel.app/" />
                    <meta name="twitter:title" content="Mercadoabierto" />
                    <meta name="twitter:description" content="The best marketplace for sell and buy tech." />
                    <meta name="twitter:image" content="https://mercadoabierto.vercel.app/images/og-image.png" />
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