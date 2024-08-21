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
    const formattedDate = new Date(date).toLocaleDateString(); // To convert a date object to a string

    return (
      <ExpenseItem
        description={description}
        amount={amount}
        date={formattedDate}
      />
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
