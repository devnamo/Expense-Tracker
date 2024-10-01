import React, { useState } from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Summary from './Summary';  // Assuming you've created a Summary component

const App = () => {
    // States for managing expenses, date, and category
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());

    // Function to handle form submission
    const addExpense = (e) => {
        e.preventDefault();
        const newExpense = { amount, category, date };
        setExpenses([...expenses, newExpense]);
        setAmount('');
        setCategory('');
        setDate(new Date());
    };

    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            <h2><i className="fas fa-heart"></i> I'm just a girl <i className="fas fa-heart"></i></h2>  
           
            <form onSubmit={addExpense}>
                <label>Amount: </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                />

                <label>Date: </label>
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    required
                />

                <label>Category: </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                
                <button type="submit">Add Expense</button>
            </form>

            <ul>
                {expenses.length === 0 ? (
                    <li>No expenses yet.</li>
                ) : (
                    expenses.map((expense, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                ₹{expense.amount} - {expense.category} - {expense.date.toLocaleDateString()}
                            </div>
                            <button className="delete-btn" onClick={() => {
                                const newExpenses = expenses.filter((_, i) => i !== index);
                                setExpenses(newExpenses);
                            }}>
                                <i className="fa fa-heart"></i> Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>

          
            <Summary expenses={expenses} />
        </div>
    );
};

export default App;


/*import React, { useState } from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Summary from './Summary';  // Assuming you've created a Summary component

const App = () => {
    // States for managing expenses, date, and category
    const [expenses, setExpenses] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());

    // Function to handle form submission
    const addExpense = (e) => {
        e.preventDefault();
        const newExpense = { amount, category, date };
        setExpenses([...expenses, newExpense]);
        setAmount('');
        setCategory('');
        setDate(new Date());
    };

    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            <h2><i className="fas fa-heart"></i> I'm just a girl <i className="fas fa-heart"></i></h2>  
           
            <form onSubmit={addExpense}>
                <label>Amount: </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                />

                <label>Date: </label>
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    required
                />

                <label>Category: </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                
                <button type="submit">Add Expense</button>
            </form>

            <ul>
                {expenses.length === 0 ? (
                    <li>No expenses yet.</li>
                ) : (
                    expenses.map((expense, index) => (
                        <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                ₹{expense.amount} - {expense.category} - {expense.date.toLocaleDateString()}
                            </div>
                            <button className="delete-btn" onClick={() => {
                                const newExpenses = expenses.filter((_, i) => i !== index);
                                setExpenses(newExpenses);
                            }}>
                                <i className="fa fa-heart"></i> Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>

          
            <Summary expenses={expenses} />
        </div>
    );
};

export default App;*/

/*import React, { useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    // Load expenses from local storage or set an empty array
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    // Update local storage whenever expenses change
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense, index) => index !== id));
    };

    return (
        <div className="App">
            <Header />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
    );
}

export default App;*/
/*import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense, index) => index !== id));
    };

    return (
        <div className="App">
            <Header />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
    );
}

export default App;*/

