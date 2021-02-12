import Document, { Html, Head,  Main, NextScript } from 'next/document';

class MyExtendedDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/autocomplete.css" />
                    <link rel="icon" type="image/png" href="/images/logo-v3.png" />

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