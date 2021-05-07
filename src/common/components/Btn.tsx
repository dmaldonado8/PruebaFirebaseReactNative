import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import colors from '../styles/Colors';
import estilos from '../styles/Estilos';

interface ButtonProps {
  text: string;
  onPress(): void;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <View style={styles.containerButtonStyle}>
      <TouchableHighlight {...props} underlayColor={colors.primary_light}>
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{props.text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtonStyle: {
    padding: estilos.padding,
  },
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: estilos.height,
    width: '100%',
  },
  textStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: estilos.fontSize,
  },
});

export default Button;
