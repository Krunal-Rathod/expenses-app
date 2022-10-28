import React from 'react'

const ExpensesList = (props) => {
    let expensesContent = <p>No expense found...</p>;
    if (props.item.length > 0) {
        expensesContent = props.item.map((props) =>
        (<Expense
            key={props.id}
            name={props.title}
            amount={props.price}
            date={props.date}
        />));
    }
}

export default ExpensesList