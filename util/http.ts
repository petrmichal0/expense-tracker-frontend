import axios from "axios";

export async function storeExpense(expenseData: {
  amount: number;
  date: Date;
  description: string;
}) {
  await axios.post(
    "https://react-native-recent-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
