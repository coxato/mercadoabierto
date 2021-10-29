import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { Dropdown } from 'semantic-ui-react';
// utils
import { getCategoryFromPath } from '../../utils/urlUtils';
import { categoriesOptions } from '../../utils/constants';


const CategoriesNavbar = () => {

    const router = useRouter();
    const [value, setValue] = useState('');

    useEffect(() => {
        const actualCategory = getCategoryFromPath();
        setValue(actualCategory); 
    }, []);

    const handleChange = value => {
        setValue(value);
        router.push(`/category/${value}`);
    }

    return (
        <div className="container">
            <Dropdown
                placeholder='category'
                fluid
                selection
                selectOnBlur={false}
                options={categoriesOptions}
                value={value}
                onChange={(ev, data) => handleChange(data.value)}
            />

            <style jsx>{`
                .container{
                    width: 160px;
                    margin: 0 12px;
                }
                @media screen and (max-width: 1080px){
                    .container{
                        width: 300px;
                        padding: 20px 0;
                    }
                }
            `}</style>
        </div>
    );
}
 
export default CategoriesNavbar;