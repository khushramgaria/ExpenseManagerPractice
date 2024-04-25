import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 299,
    date: new Date(2021, 2, 28)
  },
  {
    id: '2',
    title: 'Toilet Paper',
    amount: 94,
    date: new Date(2020, 7, 14)
  },
  {
    id: '3',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
  {
    id: '4',
    title: 'Old Monk',
    amount: 13,
    date: new Date(2024, 1, 8)
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
