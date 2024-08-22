import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_EXPENSES } from "../../store/expenses-context";

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

function ExpensesOutput({ expenses, periodName }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
});
