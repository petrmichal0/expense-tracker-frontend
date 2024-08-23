import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { GlobalStyles } from "../../constants/styles";

type InputProps = {
  label: string;
  textInputConfig?: TextInputProps & {
    minHeight?: number;
    textAlignVertical?: "top" | "center" | "bottom";
  };
};

function Input({ label, textInputConfig }: InputProps) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    borderColor: GlobalStyles.colors.gray500,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 8,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
