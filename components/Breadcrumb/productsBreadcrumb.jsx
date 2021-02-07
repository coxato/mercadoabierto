import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'semantic-ui-react';
import { cutText } from '../../utils/textUtils';


const ProductsBreadcrumb = ({ category = '', title = '' }) => {
    return (
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Section>
                    <Link href="/"><a>Home</a></Link>
                </Breadcrumb.Section>

                {
                    category && (
                        <>
                            <Breadcrumb.Divider icon='right angle' />

                            <Breadcrumb.Section active={!title}>
                                <Link href={`/category/${category}`}><a>{category}</a></Link>
                            </Breadcrumb.Section>
                        </>
                    )
                }

                {
                    title && (
                    <>
                        <Breadcrumb.Divider icon='right angle' />

                        <Breadcrumb.Section active>
                            { cutText(title, 25) }
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