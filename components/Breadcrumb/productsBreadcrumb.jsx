import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'semantic-ui-react';

const ProductsBreadcrumb = ({ category, title = '' }) => {
    return (
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Section>
                    <Link href="/"><a>Home</a></Link>
                </Breadcrumb.Section>

                <Breadcrumb.Divider icon='right angle' />

                <Breadcrumb.Section active={!title}>
                    <Link href={`/category/${category}`}><a>{category}</a></Link>
                </Breadcrumb.Section>

                {
                    title && (
                    <>
                        <Breadcrumb.Divider icon='right angle' />

                        <Breadcrumb.Section active>
                            { title.length >= 25 ? `${title.substring(0, 25)}...` : title }
                        </Breadcrumb.Section>
                    </>)
                }
            </Breadcrumb>

            <style jsx>{`
                .container{
                    padding: 20px 0;
                }
            `}</style>
        </div>
    );
}
 
export default ProductsBreadcrumb;