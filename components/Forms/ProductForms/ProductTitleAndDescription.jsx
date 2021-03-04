import React, { useState } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
// store
import { useProductState } from '../../../store/productCreation';
// style for product forms
import s from './product-forms.module.css';


const TitleAndDescription = ({handleChange}) => {

    const [titleLen, setTitleLen] = useState(0);
    const [descriptionLen, setDescriptionLen] = useState(0);
    const { productData: { title, description } } = useProductState();

    const setLen = ({target: { name, value }}) => {
        name === 'title' ? setTitleLen(value.length) : setDescriptionLen(value.length);
    }

    return (
        <div className={s.formCard}>

            <div className={s.lblCont}>
                <Form.Field>
                    <label>Title</label>
                    <Form.Input
                        onChange={ ev => {
                            setLen(ev);
                            handleChange(ev);
                        }}
                        name="title"
                        minLength="10"
                        maxLength="60"
                        required
                        placeholder="Write a very descriptive title, like 'iphone 12 128gb ROM 3gb RAM'"
                        defaultValue={title}
                    />
                </Form.Field>
                <div className={s.lbl}>{`${titleLen}/60`}</div>
            </div>

            <div className={s.lblCont}>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        onChange={ ev => {
                            setLen(ev);
                            handleChange(ev);
                        }}
                        name="description"
                        maxLength="1600"
                        required
                        placeholder="Write a description for your product"
                        style={{ minHeight: 100 }}
                        defaultValue={description}
                    />
                </Form.Field>
                <div className={s.lbl}>{`${descriptionLen}/1600`}</div>
            </div>
        </div>

    );
}
 
export default TitleAndDescription;