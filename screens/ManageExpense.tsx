import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../constants/styles";

import IconButton from "../components/UI/IconButton";

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
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId; // !! converts to boolean

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  return (
    <View style={styles.container}>
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
