import React, { useState } from 'react';
import Expense from './Expense';
import Card from './Card';
import './Expenses.css';
import NewExpense from '../NewExpense/NewExpense';
import ExpensesFilter from './ExpenseFilter';

const DUMMY_EXPENSES = [
    {
        id: 1,
        title: 'Bike Insurance',
        date: new Date('2022-10-12'),
        price: 78.2
    },
    {
        id: 2,
        title: 'Personal Cost',
        date: new Date('2021-10-22'),
        price: 18.17
    },
    {
        id: 3,
        title: 'Travel Expense',
        date: new Date('2020-10-18'),
        price: 10
    },
    {
        id: 4,
        title: 'Furniture',
        date: new Date('2019-01-01'),
        price: 100.22
    }
];

const ExpensesItem = (props) => {
    const [expense, setExpense] = useState(DUMMY_EXPENSES);

    const addExpenseHanlder = (expense) => {
        setExpense(prevExpense => [(expense), ...prevExpense]);
    }

    const [filteredYear, setfilteredYear] = useState('2021');

    const FilterChangeHandler = (selectYear) => {
        console.log('From Item');
        setfilteredYear(selectYear);
    }

    const filteredExpense = expense.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expense found...</p>;
    if (filteredExpense.length > 0) {
        expensesContent = filteredExpense.map((props) =>
        (<Expense
            key={props.id}
            name={props.title}
            amount={props.price}
            date={props.date}
        />));
    }

    return (
        <>
            <section>
                <div className='container'>
                    {/* {
                        expenses.map((props) => (
                            <Expense name={props.title} amount={props.price} date={props.date} />
                        ))
                    } */}
                    <NewExpense addExpense={addExpenseHanlder} />
                    <Card className='expenses'>
                        <ExpensesFilter selected={filteredYear} onFilterChange={FilterChangeHandler} />
                        {expensesContent}
                    </Card>
                </div>
            </section>
        </>
    )
}

export default ExpensesItem