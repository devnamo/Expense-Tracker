import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.length === 0 ? (
                    <li>No expenses yet.</li>
                ) : (
                    expenses.map((expense, index) => (
                        <li key={index}>
                            {expense.amount} - {expense.category} - {expense.date}
                            <button onClick={() => deleteExpense(index)}>Delete</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ExpenseList;

/*import React from 'react';

const ExpenseList = () => {
    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                <li>Sample Expense</li>
            </ul>
        </div>
    );
}

export default ExpenseList;*/
