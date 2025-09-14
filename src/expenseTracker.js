import React, { useState } from "react";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense"); // "income" or "expense"
  const [category, setCategory] = useState("");

  //Category options
    const categories = ["Food", "Transport", "Utilities", "Entertainment", "Health", "Other"];

  // Add new transaction
  const addTransaction = () => {
    if (!description || !amount || !category) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toLocaleDateString(),
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription("");
    setAmount("");
    setCategory("");
  };

  // Delete transaction by id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Calculate totals
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="min-h-screen w-full p-6 bg-gradient-to-t from-gray-600 to-white rounded shadow">
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-b from-gray-300 to-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Budget Buddy</h2>

      {/* Input form */}
      <div className="mb-4 space-y-3">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          onClick={addTransaction}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Transaction
        </button>
      </div>

      {/* Balance overview */}
      <div className="mb-6 bg-gray-100 p-4 rounded flex justify-between font-semibold">
        <div>
          <div>Income</div>
          <div className="text-green-600">${income.toFixed(2)}</div>
        </div>
        <div>
          <div>Expenses</div>
          <div className="text-red-600">${expenses.toFixed(2)}</div>
        </div>
        <div>
          <div>Balance</div>
          <div className={`${balance >= 0 ? "text-green-600" : "text-red-600"}`}>
            ${balance.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Transaction list */}
      <ul>
        {transactions.map(({ id, description, amount, type, category, date }) => (
          <li
            key={id}
            className="flex justify-between items-center mb-3 border-b pb-2"
          >
            <div>
              <div className="font-semibold">{description}</div>
              <div className="text-sm text-gray-500">{date}</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={type === "income" ? "text-green-600" : "text-red-600"}>
                {type === "income" ? "+" : "-"}${amount.toFixed(2)}
              </div>
                <div className="text-sm text-gray-500">{category}</div>
              <button
                onClick={() => deleteTransaction(id)}
                className="text-red-500 font-bold"
                aria-label="Delete transaction"
              >
                &times;
              </button>
            </div>
          </li>
        ))}

        {transactions.length === 0 && (
          <li className="text-center text-gray-400">No transactions yet</li>
        )}
      </ul>
    </div>
    </div>
  );
}

export { ExpenseTracker };