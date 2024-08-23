import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return <ExpensesOutput periodName="Total" expenses={expensesCtx.expenses} />;
}

export default AllExpenses;
