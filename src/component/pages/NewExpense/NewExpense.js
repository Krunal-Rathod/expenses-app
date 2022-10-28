import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHanler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpense(expenseData);
        //console.log(expenseData);
    }

    return (
        <>
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHanler} />
            </div>
        </>
    )
}

export default NewExpense