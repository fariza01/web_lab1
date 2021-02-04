import React from 'react';
import s from './AddRecord.module.scss'

const AddRecord:React.FC = () => {
    return(
        <div className={s.addRecord_wrapper}>
            <h2 className={s.title}>Add record</h2>
            <div className={s.formControl}>
                <label className={s.label}>Jogging date:</label>
                <input className={s.input} placeholder="mm/dd/yyyy" type="date"></input>
            </div>
            <div className={s.formControl}>
                <label className={s.label}>Distance (m)</label>
                <input className={s.input} placeholder="0"></input>
            </div>
            <div className={s.formControl}>
                <label className={s.label}>Time (s):</label>
                <input className={s.input} placeholder="0"></input>
            </div>
             <button className={s.button}>Save</button>
        </div>
    )
}
export default AddRecord;