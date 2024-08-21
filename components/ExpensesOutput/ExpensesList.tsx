import { FlatList, Text } from "react-native";

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
  function renderExpenseItem(itemData) {
    return (
      <>
        {/* <Text>{itemData.item.amount}</Text> */}
        <Text>{itemData.item.description}</Text>
        {/* <Text>{itemData.item.date}</Text> */}
        {/* <Text>{itemData.item.id}</Text> */}
      </>
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
