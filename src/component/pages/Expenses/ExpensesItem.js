import React from 'react';
import Expense from './Expense';
import Card from './Card';
import './Expenses.css';
import NewExpense from '../NewExpense/NewExpense';

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
                    {/* {
                        expenses.map((props) => (
                            <Expense name={props.title} amount={props.price} date={props.date} />
                        ))
                    } */}
                    <NewExpense />
                    <Card className='expenses'>
                        <Expense
                            name={expenses[0].title}
                            amount={expenses[0].price}
                            date={expenses[0].date}
                        />
                        <Expense
                            name={expenses[1].title}
                            amount={expenses[1].price}
                            date={expenses[1].date}
                        />
                        <Expense
                            name={expenses[2].title}
                            amount={expenses[2].price}
                            date={expenses[2].date}
                        />
                    </Card>
                </div>
            </section>
        </>
    )
}

export default ExpensesItem