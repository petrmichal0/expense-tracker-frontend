import { Text, View } from "react-native";

type ExpensesSummaryProps = {
  periodName: string;
  expenses: { amount: number }[];
};

function ExpensesSummary({ periodName, expenses }: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
