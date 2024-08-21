import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

type Expense = {
  amount: number;
  description: string;
  date: Date;
  id: string;
};

type ExpensesListProps = {
  expenses: Expense[];
};

function ExpensesList({ expenses }: ExpensesListProps) {
  function renderExpenseItem(itemData: { item: Expense }) {
    const { description, amount, date } = itemData.item;

    return (
      <ExpenseItem description={description} amount={amount} date={date} />
    );
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
