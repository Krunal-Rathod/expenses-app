import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

const Expense = (props) => {
    const [title, setTitle] = useState(props.name);
    //let title = props.name;

    const eventHandler = () => {
        setTitle('Updated!!!');
        //console.log(title)
    } 

    return (
        <>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={eventHandler}>Change Title</button>
            </Card>
        </>
    )
}

export default Expense