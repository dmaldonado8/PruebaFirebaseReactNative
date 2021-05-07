import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const Main = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Main.Navigator headerMode="none">
      <Main.Screen name="MainScreen" component={MainScreen} />
    </Main.Navigator>
  );
};

export default MainStack;
