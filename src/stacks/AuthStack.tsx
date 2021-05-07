import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Auth = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
