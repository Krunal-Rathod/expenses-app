import React from 'react'
import Expense from './Expense';

const ExpensesItem = () => {
    const expenses = [
        {
            title: 'Bike Insurance',
            date: new Date('2022-10-12'),
            price: 78.2
        },
        {
            title: 'Personal Cost',
            date: new Date('2022-10-22'),
            price: 18.17
        },
        {
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
                            <Expense expenseName={props.name} expensePrice={props.price} expenseDate={props.date} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default ExpensesItem