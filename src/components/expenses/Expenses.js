import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
};
export default Expenses;
