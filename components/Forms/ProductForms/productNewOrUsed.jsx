import React, { useState } from 'react';
import { Header, Button } from 'semantic-ui-react';
// style for product forms
import s from './product-forms.module.css';

const NewOrUsedForm = ({handleChange}) => {

    const [ isNew, setIsNew ] = useState(true);

    const handleClick = _isNew => {
        setIsNew(_isNew);
        handleChange({
            target: {
                name: 'new',
                value: _isNew ? 1 : 0
            }
        })
    }

    return (
        <>
            <Header textAlign="left" content="Is it new or used?" as="h4" />
            <div className={s.formCard}>
                <div className={s.btns}>
                    
                    <div className={s.btn} style={{borderColor: isNew ? 'var(--blue)' : 'transparent'}}>
                        <Button onClick={() => handleClick(true)} type="button">
                            New
                        </Button>
                    </div>

                    <div className={s.btn} style={{borderColor: isNew ? 'transparent' : 'var(--blue)'}}>
                        <Button onClick={() => handleClick(false)} type="button">
                            Used
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default NewOrUsedForm;