import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/data";
import { getAllExpenses } from "../util/api";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      setIsFetching(true);
      try {
        const expenses = await getAllExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (err) {
        setError("Could not fetch expenses!");
      } finally {
        setIsFetching(false);
      }
    }
    fetchExpenses();
  }, []);

  function errorHandler() {
    setError("");
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 days"
      falbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
