import React, { useContext } from "react";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const budgets = [];
  const expenses = [];

  function getBudgetExpenses() {}
  function addExpense() {}
  function deleteExpense() {}
  function addBudget() {}
  function deleteBudget() {}
  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        deleteExpense,
        addBudget,
        deleteBudget,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
