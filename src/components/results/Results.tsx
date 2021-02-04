import React from 'react';
import s from './Results.module.scss';

const Results:React.FC = () => {
    return (
        <div className = {s.wrapper}>
            <h2 className={s.title}>My results</h2>   
            <button className={s.button}>New</button> 

            <table className={s.table}>
                <tr className={s.heading_row}>
                    <th>Date</th>
                    <th>Distance in meters</th>
                    <th>Time</th>
                    <th>Average speed</th>
                    <th>Options</th>
                </tr>
                <tr className={s.row}>
                    <td>2018-04-11</td>
                    <td>5000.00</td>
                    <td>42.40</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
                <tr className={s.row}>
                    <td>2018-04-03</td>
                    <td>3000.00</td>
                    <td>13:20</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
                <tr className={s.row}>
                    <td>2018-04-02</td>
                    <td>5000.00</td>
                    <td>35:00</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
                <tr className={s.row}>
                    <td>2018-03-28</td>
                    <td>1000.00</td>
                    <td>10:00</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
                <tr className={s.row}>
                    <td>2018-03-27</td>
                    <td>1200.00</td>
                    <td>12:00</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
                <tr className={s.row}>
                    <td>2018-03-26</td>
                    <td>1300.00</td>
                    <td>13:30</td>
                    <td>7.20</td>
                    <td>Edit Delete</td>
                </tr>
            </table>
        </div>

    )
}
export default Results;