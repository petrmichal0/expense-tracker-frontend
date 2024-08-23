import { Text, TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  label: string;
  textInputConfig: TextInputProps;
};

function Input({ label, textInputConfig }: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
