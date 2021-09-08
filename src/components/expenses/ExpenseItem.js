// import { useState } from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  // const [title2, setTitle2] = useState(title);

  // const clickHandler = () => {
  //   setTitle2("Updated!!");
  //   console.log("Clicked!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
