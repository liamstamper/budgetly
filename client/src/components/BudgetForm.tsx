import { useState } from "react";

interface BudgetItem {
  type: "Income" | "Bill";
  description: string;
  amount: number;
}

const BudgetForm = () => {
  const [budgetItem, setBudgetItem] = useState<BudgetItem>({
    type: "Income",
    description: "",
    amount: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setBudgetItem((prev) => ({
      ...prev,
      [id]: id === "amount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(budgetItem);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg w-full h-full bg-background-secondary rounded-md shadow-sm">
      <fieldset className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <div className="flex justify-between">
          <p className="text-xl text-text-primary font-bold">Add Item</p>
          <i className="material-icons text-3xl text-accent-primary">cancel</i>
          </div>
          <p className="text-xs text-text-secondary">Select the type, description, amount, and color</p>
        </div>

        {/* Type Dropdown */}
        <div className="space-y-1">
          <label htmlFor="type" className="text-sm text-text-primary">Type</label>
          <select
            id="type"
            value={budgetItem.type}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md border-border bg-background-secondary text-text-primary"
          >
            <option value="Income">Income</option>
            <option value="Bill">Bill</option>
          </select>
        </div>

        {/* Description Input */}
        <div className="space-y-1">
          <label htmlFor="description" className="text-sm text-text-primary">Description</label>
          <input
            id="description"
            type="text"
            value={budgetItem.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            className="w-full px-3 py-2 border rounded-md border-border bg-background-secondary text-text-primary"
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-1">
          <label htmlFor="amount" className="text-sm text-text-primary">Amount</label>
          <input
            id="amount"
            type="number"
            value={budgetItem.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
            className="w-full px-3 py-2 border rounded-md border-border bg-background-secondary text-text-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-accent-primary text-background-primary"
          >
            Add {budgetItem.type}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default BudgetForm;
