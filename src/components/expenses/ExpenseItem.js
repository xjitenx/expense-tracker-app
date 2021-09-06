import { useState } from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [title2, setTitle2] = useState(title);

  const clickHandler = () => {
    setTitle2("Updated!!");
    console.log("Clicked!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title2}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
