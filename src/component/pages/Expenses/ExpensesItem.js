import React from 'react'
import Expense from './Expense';

const ExpensesItem = () => {
    const expenses = [
        {
            id: 1,
            title: 'Bike Insurance',
            date: new Date('2022-10-12'),
            price: 78.2
        },
        {
            id: 2,
            title: 'Personal Cost',
            date: new Date('2022-10-22'),
            price: 18.17
        },
        {
            id: 3,
            title: 'Travel Expense',
            date: new Date('2022-10-18'),
            price: 10
        }
    ];
    return (
        <>
            <section>
                <div className='container'>
                    {
                        expenses.map((props) => (
                            <Expense expenseName={props.title} expensePrice={props.price} expenseDate={props.date} />
                        ))
                    }
                </div>
            </section>
            <section></section>
        </>
    )
}

export default ExpensesItem