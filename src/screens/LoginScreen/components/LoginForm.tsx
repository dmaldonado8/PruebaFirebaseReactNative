import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import Button from '../../../common/components/Btn';
import ErrorMessage from '../../../common/components/ErrorMessage';
import Input from '../../../common/components/InputText';
import {AuthContext} from '../../../providers/AuthProvider';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setMessage] = useState('');
  const {login} = useContext(AuthContext);

  const submit = async () => {
    setMessage('');
    if (!email || !password || email === '' || password === '') {
      setMessage('Error al ingresar');
      return;
    }
    const auth = await login(email, password);
    if (!auth) {
      setMessage('Error al ingresar');
    }
  };

  return (
    <View>
      <>
        <Input
          placeholder="micorreo@empresa.cl"
          value={email}
          secureTextEntry={false}
          label="Correo"
          onChangeText={(v: string) => setEmail(v)}
        />
        <Input
          placeholder="Contraseña"
          value={password}
          secureTextEntry={true}
          label="Contraseña"
          onChangeText={(v: string) => setPassword(v)}
        />
      </>
      <>
        <Button text="Ingresar" onPress={submit} />
      </>
      <ErrorMessage message={errorMessage} />
    </View>
  );
};

export default LoginForm;
