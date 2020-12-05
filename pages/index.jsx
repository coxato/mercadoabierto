import React from 'react';
import Link from 'next/link';

const HomePage = () => {

    return (
        <div>
            <h1>Homepage</h1>
            <Link href="/submitProduct">
                <a>submit a product</a>
            </Link>
        </div> 
    );
}
 
export default HomePage;