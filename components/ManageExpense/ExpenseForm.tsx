import { StyleSheet, Text, View, Alert } from "react-native";
import { useState } from "react";

import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";
import Button from "../../components/UI/Button";
import { getFormattedDate } from "../../util/data";

type ExpenseFormProps = {
  onCancel: () => void;
  onSubmit: (expenseData: {
    amount: number;
    date: Date;
    description: string;
  }) => void;
  submitButtonLabel: string;
  defaultValues?: {
    amount: number;
    date: Date;
    description: string;
  };
};

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}: ExpenseFormProps) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate({ date: defaultValues.date }) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((inputValues) => {
      return { ...inputValues, [inputIdentifier]: enteredValue };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            backgroundColor: GlobalStyles.colors.primary100,
            padding: 6,
            borderRadius: 6,
            keyboardType: "decimal-pad",
            onChangeText: (enteredValue) =>
              inputChangedHandler("amount", enteredValue),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            backgroundColor: GlobalStyles.colors.primary100,
            padding: 6,
            borderRadius: 6,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            keyboardType: "decimal-pad",
            onChangeText: (enteredValue) => {
              inputChangedHandler("date", enteredValue);
            },
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredValue) => {
            inputChangedHandler("description", enteredValue);
          },
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={onCancel} mode="flat">
          Cancel
        </Button>

        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  button: {
    minWidth: 100,
  },
});
