import { useEffect } from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

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

  return <Text>Manage</Text>;
}

export default ManageExpense;
