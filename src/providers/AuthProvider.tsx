import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext({} as any);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            return true;
          } catch (error) {
            return null;
          }
        },
        logout: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
