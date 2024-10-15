import axios from "axios";

// Backend URL na Heroku
const BACKEND_URL =
  "https://expense-tracker-v1-backend-e443d7377cc0.herokuapp.com/api/v1/expenses";

type createExpenseProps = {
  amount: number;
  date: Date;
  description: string;
};

// Funkce pro uložení výdajů
export async function createExpense(expenseData: createExpenseProps) {
  const response = await axios.post(BACKEND_URL, expenseData);
  const id = response.data.data.expense._id; // Získáme ID výdaje z odpovědi backendu
  return id;
}

// Funkce pro získání všech výdajů
export async function getAllExpenses() {
  const response = await axios.get(BACKEND_URL);

  const expenses = response.data.data.expenses.map((expense: any) => ({
    id: expense._id, // _id je automaticky generovaný MongoDB
    amount: expense.amount,
    date: new Date(expense.date),
    description: expense.description,
  }));

  return expenses;
}

// Funkce pro aktualizaci výdaje
export function updateExpense(
  id: string,
  expenseData: {
    amount: number;
    date: Date;
    description: string;
  }
) {
  return axios.patch(`${BACKEND_URL}/${id}`, expenseData);
}

// Funkce pro smazání výdaje
export async function deleteExpense(id: string) {
  return axios.delete(`${BACKEND_URL}/${id}`);
}
