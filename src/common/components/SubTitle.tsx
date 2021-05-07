import React from 'react';
import {Text, View} from 'react-native';
import colors from '../styles/Colors';
import estilos from '../styles/Estilos';

let titleContainerStyle = {
  padding: estilos.padding,
};

let titleStyle = {
  fontSize: 15,
  color: colors.dark,
};

interface TitleProps {
  text: string;
}

const SubTitle: React.FC<TitleProps> = (props) => {
  return (
    <View style={titleContainerStyle}>
      <Text style={titleStyle}>{props.text}</Text>
    </View>
  );
};

export default SubTitle;
