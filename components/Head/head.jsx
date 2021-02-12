import Head from 'next/head';

const CustomHead = ({ title, isHomepage = false }) => {
    return (
        <Head>
            <title>{title + (isHomepage ? '' : ' | mercadoabierto')}</title>
        </Head>
    );
}
 
export default CustomHead;