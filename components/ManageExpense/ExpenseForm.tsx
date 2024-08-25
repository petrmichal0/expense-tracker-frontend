import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { GlobalStyles } from "../../constants/styles";

import Input from "./Input";
import Button from "../../components/UI/Button";

type ExpenseFormProps = {
  onCancel: () => void;
  onSubmit: (expenseData: {
    amount: string;
    date: string;
    description: string;
  }) => void;
  submitButtonLabel: string;
};

function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
}: ExpenseFormProps) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
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
