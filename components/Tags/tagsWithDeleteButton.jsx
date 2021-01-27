import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

const TagsWithDeleteButton = ({ tags, onRemove, color = 'white' }) => {
    return (
        <div className="container">

            {
                tags.map( (tag, idx) => (
                    <Label key={idx} style={{backgroundColor: color}}>
                        {tag}
                        <Icon name="delete" onClick={() => onRemove(tag)} />
                    </Label>
                ))
            }

            <style jsx>{`
                .container{
                    display: flex;
                }
            `}</style>
        </div>
    );
}
 
export default TagsWithDeleteButton;