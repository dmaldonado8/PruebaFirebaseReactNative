import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/Colors';
import estilos from '../styles/Estilos';

interface ErrorProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorProps> = props => {
  const {message} = props;
  return (
    <View>
      {message === '' ? null : <Text style={styles.errorText}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: estilos.fontSize,
    color: colors.error,
    textAlign: 'center',
  },
});

export default ErrorMessage;
