import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../styles/Colors';
import estilos from '../styles/Estilos';

let inputStyle = {
  padding: 5,
  borderWidth: 1,
  backgroundColor: colors.white,
  borderRadius: 3,
  height: estilos.height,
  borderColor: colors.dark,
  fontSize: estilos.fontSize,
};

const labelStyle = {
  fontSize: estilos.fontSize,
  marginBottom: 5,
};

const inputContainer = {
  padding: estilos.padding,
};

interface IInputProps {
  placeholder?: string;
  label?: string;
  value: string;
  onChangeText(v: string): void;
  secureTextEntry: boolean;
}

const Input: React.FC<IInputProps> = props => {
  const {label} = props;
  const [borderColor, setBorderColor] = useState(colors.dark);

  const focusHandle = () => {
    setBorderColor(colors.primary);
  };

  const blurHandle = () => {
    setBorderColor(colors.dark);
  };

  return (
    <View style={inputContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        {...props}
        selectionColor={colors.primary}
        onFocus={focusHandle}
        onBlur={blurHandle}
        style={{...inputStyle, borderColor}}
      />
    </View>
  );
};

export default Input;
