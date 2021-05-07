import React from 'react';
import {View} from 'react-native';
import colors from '../styles/Colors';

let separatorStyle = {
  borderColor: colors.dark,
  borderBottomWidth: 1,
  marginTop: 5,
  marginBottom: 5,
};

const Separator = () => {
  return <View style={separatorStyle} />;
};

export default Separator;
