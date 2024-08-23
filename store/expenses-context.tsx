import { createContext, useReducer } from "react";

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpensesState = Expense[];

type AddExpenseAction = {
  type: "ADD";
  payload: Omit<Expense, "id">; // při přidání výdaje, id se generuje
};

type UpdateExpenseAction = {
  type: "UPDATE";
  payload: {
    id: string;
    data: Partial<Omit<Expense, "id">>; // data obsahuje pouze ty hodnoty, které se aktualizují
  };
};

type DeleteExpenseAction = {
  type: "DELETE";
  payload: string; // id výdaje, který se má odstranit
};

type ExpensesAction =
  | AddExpenseAction
  | UpdateExpenseAction
  | DeleteExpenseAction;

type ExpensesContextType = {
  expenses: ExpensesState;
  addExpense: (expenseData: Omit<Expense, "id">) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    expenseData: Partial<Omit<Expense, "id">>
  ) => void;
};

type ExpensesContextProviderProps = {
  children: React.ReactNode;
};

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Socks",
    amount: 99.99,
    date: new Date("2024-07-15"),
  },
  {
    id: "e2",
    description: "Shoes",
    amount: 125.99,
    date: new Date("2024-07-16"),
  },
  {
    id: "e3",
    description: "Oranges",
    amount: 35.99,
    date: new Date("2024-05-15"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 65.99,
    date: new Date("2024-04-15"),
  },
  {
    id: "e5",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-04-18"),
  },
  {
    id: "e6",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-04-18"),
  },
  {
    id: "e7",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-04-18"),
  },
  {
    id: "e8",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-04-18"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-08-22"),
  },
  {
    id: "e10",
    description: "Book",
    amount: 35.99,
    date: new Date("2024-08-22"),
  },
];

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

function expensesReducer(
  state: ExpensesState,
  action: ExpensesAction
): ExpensesState {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: id }];

    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense
      );

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: ExpensesContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: Omit<Expense, "id">) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(
    id: string,
    expenseData: Partial<Omit<Expense, "id">>
  ) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value: ExpensesContextType = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
