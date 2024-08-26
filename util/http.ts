import axios from "axios";

const BACKEND_URL =
  "https://react-native-recent-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData: {
  amount: number;
  date: Date;
  description: string;
}) {
  await axios.post(BACKEND_URL + " /expenses.json", expenseData);
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const data = response.data;
  console.log(data);

  const expenses = Object.entries(data).map(([key, value]: [string, any]) => ({
    id: key,
    amount: value.amount,
    date: new Date(value.date),
    description: value.description,
  }));
  console.log(expenses);

  return expenses;
}
