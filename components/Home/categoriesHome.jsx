import React from 'react';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
// utils
import { categoriesOptions as categories } from '../../utils/constants';
// style
import s from './styles/categoriesHome.module.css';

const CategoriesHome = () => {
    return (
        <div className={s.container}>

            <div className={s.titleWrapper}>
                <h2 className={s.title}>Categories</h2>
            </div>

            <div className={s.gridWrapper}>
                {
                    categories.map( ({key, text, value, icon}) => (
                        <Link href={`/category/${value}`} key={key}>
                            <a className={s.categoryContainer}> 
                                <div className={s.iconAndText}>
                                    <Icon size="big" name={icon} className={s.icon}/>
                                    <h2 className={s.text}>{text}</h2>
                                </div>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
 
export default CategoriesHome;