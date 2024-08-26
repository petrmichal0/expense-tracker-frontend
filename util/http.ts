import axios from "axios";

const BACKEND_URL =
  "https://react-native-recent-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeExpense(expenseData: {
  amount: number;
  date: Date;
  description: string;
}) {
  const response = await axios.post(BACKEND_URL + "expenses.json", expenseData);
  const id = response.data.name; // name je generovaný identifikátor from Firebase

  return id;
}

export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + "expenses.json");

  const expenses = Object.entries(response.data).map(
    ([key, value]: [string, any]) => ({
      id: key,
      amount: value.amount,
      date: new Date(value.date),
      description: value.description,
    })
  );

  return expenses;
}
