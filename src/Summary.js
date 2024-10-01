import React from 'react';

const Summary = ({ expenses }) => {
    const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);
    
    return (
        <div className="summary">
            <h3>Total Expenses: ₹{total.toFixed(2)}</h3>
        </div>
    );
};

export default Summary;
/*import React from "react";

function Summary({ total }) {
    return (
        <div className="summary">
            <h3>Total Expenses: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Summary;*/
/*import React from 'react';

const Summary = ({ expenses }) => {
    const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

    const categoryBreakdown = expenses.reduce((categories, expense) => {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += parseFloat(expense.amount);
        return categories;
    }, {});

    return (
        <div className="summary">
            <h2>Expense Summary</h2>
            <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
            <h3>By Category:</h3>
            <ul>
                {Object.keys(categoryBreakdown).map((category) => (
                    <li key={category}>
                        {category}: ₹{categoryBreakdown[category].toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Summary;*/
