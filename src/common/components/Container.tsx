import React from 'react';
import {StyleSheet, View} from 'react-native';
import estilos from '../styles/Estilos';

interface ContainerProps {
  children: React.ReactChild;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: estilos.padding,
    height: 'auto',
  },
});

export default Container;
