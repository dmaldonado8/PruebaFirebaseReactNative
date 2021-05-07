import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/Colors';
import estilos from '../styles/Estilos';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <View style={styles.titleContainerStyle}>
      <Text style={styles.titleStyle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  titleContainerStyle: {
    padding: estilos.padding,
  },
});

export default Title;
