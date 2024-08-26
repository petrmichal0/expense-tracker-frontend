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

type SetExpensesAction = {
  type: "SET";
  payload: ExpensesState;
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
  | SetExpensesAction
  | AddExpenseAction
  | UpdateExpenseAction
  | DeleteExpenseAction;

type ExpensesContextType = {
  expenses: ExpensesState;
  addExpense: (expenseData: Omit<Expense, "id">) => void;
  setExpenses: (expenses: Expense[]) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    expenseData: Partial<Omit<Expense, "id">>
  ) => void;
};

type ExpensesContextProviderProps = {
  children: React.ReactNode;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: () => {},
  setExpenses: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

function expensesReducer(
  state: ExpensesState,
  action: ExpensesAction
): ExpensesState {
  switch (action.type) {
    case "SET":
      return action.payload;

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
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: Omit<Expense, "id">) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses: Expense[]) {
    dispatch({ type: "SET", payload: expenses });
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
    setExpenses,
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
