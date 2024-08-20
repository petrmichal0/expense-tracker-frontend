import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

type Expense = {
  id: string;
  amount: number;
  description: string;
};

type ExpensesOutputProps = {
  expenses: Expense[] | null;
};

function ExpensesOutput({ expenses, periodName }: ExpensesOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;
