import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

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
  falbackText?: string;
};

function ExpensesOutput({
  expenses,
  periodName,
  falbackText,
}: ExpensesOutputProps) {
  let content = <Text style={styles.infoText}>{falbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoText: {
    color: GlobalStyles.colors.accent500,
    marginTop: 32,
    textAlign: "center",
    fontSize: 16,
  },
});
