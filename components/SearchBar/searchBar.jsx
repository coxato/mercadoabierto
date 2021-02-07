import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';
// autocomplete
import autoCompleteInit from './autoCompleteLogic';
// requests
// import productRequests from '../../requests/products';
// style
import s from './searchBar.module.css';

const SearchBar = () => {

    const { query, push } = useRouter();

    const [text, setText] = useState('');

    const handleChange = (ev) => setText(ev.target.value);

    // submit by Press 'Enter' key or press 'Search' icon
    const handleSubmit = ev => {
        ev?.preventDefault();
        if(text.trim().length){
            push(`/search/${text}`);
        }
    }

    // submit by the suggestion
    const handleSubmitBySuggestion = (selectedSuggestion) => {
        console.log(selectedSuggestion);
        push(`/search/${selectedSuggestion}`);
    }


    useEffect(() => {
        const { searchProductText } = query;
        // console.log("the search query is", search);
        if(searchProductText) setText(searchProductText);

        autoCompleteInit(handleSubmitBySuggestion);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="autoComplete_wrapper">
                <div className={s.container}>
                    <input 
                        onChange={handleChange}
                        onKeyUp={ ({key}) => key === 'Enter' && handleSubmit() } 
                        autoComplete="off"
                        text={text} 
                        type="text" 
                        placeholder="Search tech products"
                        className={s.input}
                        maxLength={120}
                        id="autoComplete-search"
                    />

                    <div className={s.lupe} onClick={handleSubmit}>
                        <Icon name="search" className="icon-no-margin" />
                    </div>
                </div>
            </div>
        </form>
    );
}
 
export default SearchBar;