import React, { useState, useEffect } from 'react';
import { Header, Button } from 'semantic-ui-react';
// style for product forms
import s from './product-forms.module.css';

const NewOrUsedForm = ({handleChange}) => {

    const [ isNew, setIsNew ] = useState(true);

    const handleState = _isNew => {
        setIsNew(_isNew);
        handleChange({
            target: {
                name: 'new',
                value: _isNew ? 1 : 0
            }
        })
    }

    // set { new: 1 } for default
    useEffect(() => {
        handleState(true);
    }, []);

    return (
        <>
            <Header textAlign="left" content="Is it new or used?" as="h4" />
            <div className={s.formCard}>
                <div className={s.btns}>
                    
                    <div className={s.btn} style={{borderColor: isNew ? 'var(--blue)' : 'transparent'}}>
                        <Button onClick={() => handleState(true)} type="button">
                            New
                        </Button>
                    </div>

                    <div className={s.btn} style={{borderColor: isNew ? 'transparent' : 'var(--blue)'}}>
                        <Button onClick={() => handleState(false)} type="button">
                            Used
                        </Button>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default NewOrUsedForm;