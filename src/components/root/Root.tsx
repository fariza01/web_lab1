import React from 'react';
import AddRecord from '../add-record/AddRecord';
import Results from '../results/Results';
import s from './Root.module.scss';
const Root: React.FC = () => {
    return(
        <div className={s.wrapper}>
            <h1 className={s.title}>Jogging diary</h1>
            <div className={s.content}>
                <AddRecord/>
                <Results/>
            </div>
        </div>
    )
}
export default Root;