import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [expense, setExpense] = useState({ amount: '', category: '', date: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Ensure all fields are filled
        if (!expense.amount || !expense.category || !expense.date) {
            setError('All fields are required.');
            return;
        }

        setError('');  // Clear error if validation passes
        addExpense(expense);  // Pass the new expense to parent component
        setExpense({ amount: '', category: '', date: '' });  // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={expense.amount}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={expense.category}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={expense.date}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
/*import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [expense, setExpense] = useState({ amount: '', category: '', date: '' });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(expense);  // Pass the new expense to the parent component
        setExpense({ amount: '', category: '', date: '' });  // Reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={expense.amount}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={expense.category}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={expense.date}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;*/
/*import React, { useState } from 'react';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({ amount: '', category: '', date: '' });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Expense:', expense);
        // Clear the form after submission
        setExpense({ amount: '', category: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={expense.amount}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={expense.category}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={expense.date}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;*/
