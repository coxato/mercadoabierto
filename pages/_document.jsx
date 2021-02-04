import Document, { Html, Head,  Main, NextScript } from 'next/document';

class MyExtendedDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="stylesheet" href="/css/autocomplete.css" />

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