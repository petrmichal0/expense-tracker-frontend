import { StackNavigationProp } from "@react-navigation/stack";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";

import IconButton from "../components/UI/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

type RootStackParamList = {
  ExpensesOverview: undefined;
  ManageExpense: { expenseId: string };
};

type ManageExpenseProps = {
  route: {
    params: {
      expenseId?: string;
    };
  };
  navigation: StackNavigationProp<RootStackParamList, "ManageExpense">;
};

function ManageExpense({ route, navigation }: ManageExpenseProps) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // !! converts to boolean

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    if (editedExpenseId) {
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test",
        amount: 100,
        date: new Date(),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 100,
        date: new Date(),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
