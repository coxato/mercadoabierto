import React, { useContext } from 'react';
import TagsWithDeleteButton from './tagsWithDeleteButton';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

// tags selecteds in products list, like new, used, brand, etc
const TagsMobile = () => {
    const { filter, reloadProductsCondition } = useContext(ProductListContext);

    if(!filter) return null;

    return (
        <div className="container">
            <TagsWithDeleteButton 
                tags={[filter]} 
                onRemove={() => reloadProductsCondition('')} 
            />

            <style jsx>{`
                .container{
                    padding: 0 16px 10px 16px;
                }
            `}</style>
        </div>
    );
}
 
export default TagsMobile;