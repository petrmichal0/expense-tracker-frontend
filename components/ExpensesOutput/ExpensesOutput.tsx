import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

type Expense = {
  amount: number;
  description: string;
  date: Date;
  id: string;
};

type ExpensesOutputProps = {
  expenses: Expense[];
  periodName: string;
};

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Socks",
    amount: 99.99,
    date: new Date("2024-07-15"),
  },
  {
    id: "e2",
    description: "Shoes",
    amount: 125.99,
    date: new Date("2024-07-16"),
  },
  {
    id: "e3",
    description: "Oranges",
    amount: 35.99,
    date: new Date("2024-05-15"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 65.99,
    date: new Date("2024-04-15"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-04-18"),
  },
];

function ExpensesOutput({ expenses, periodName }: ExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
