import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
// style
import s from './searchBar.module.css';

const SearchBar = () => {

    const { query } = useRouter();

    const [value, setValue] = useState('');

    const handleChange = (ev) => setValue(ev.target.value);

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(value);
        // onSubmit(value);
    }

    useEffect(() => {
        const { search } = query;
        // console.log("the search query is", search);
        if(search) setValue(search);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.container}>
                <input 
                    onChange={handleChange} 
                    value={value} 
                    type="text" 
                    placeholder="Search tech products"
                    className={s.input}
                />

                <div className={s.lupe} onClick={handleSubmit}>
                    <Icon name="search" className="icon-no-margin" />
                </div>
            </div>
        </form>
    );
}
 
export default SearchBar;