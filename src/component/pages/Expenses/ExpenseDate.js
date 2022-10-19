import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleDateString('en-US', { month: 'long'});
    const day = props.date.toLocaleDateString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <>
            <div className='expense-date'>
                <span className='expense-date__month'>{month}</span>
                <span className='expense-date__day'>{day}</span>
                <span className='expense-date__year'>{year}</span>
            </div>
        </>
    )
}

export default ExpenseDate