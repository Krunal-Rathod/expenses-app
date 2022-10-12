import React from 'react'

const Expense = (props) => {
    return (
        <>
            <div className='card mb-3'>
                <div className='card-header'>
                    <h2 className='mb-3'>{props.expenseName}</h2>
                    <h5>{props.expenseDate.toISOString()}</h5>
                </div>
                <div className='card-body'>
                    <h4>Price: ${props.expensePrice}</h4>
                </div>
            </div>
        </>
    )
}

export default Expense