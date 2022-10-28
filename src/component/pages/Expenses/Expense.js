import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

const Expense = (props) => {
    return (
        <>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.name}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </>
    )
}

export default Expense