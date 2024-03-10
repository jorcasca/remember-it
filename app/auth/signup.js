import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Provider } from "@react-native-material/core";
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { useRouter } from 'expo-router';
import Colors from '../../src/constants/constants';

const SignUp = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [visible, setVisible] = useState(false);

  const goBack = () => {
    setVisible(false)
    router.dismiss()
  }

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => goBack()}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>¡Registro exitoso!</Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Ok"
            variant="text"
            color={Colors.primary}
            onPress={() => goBack()}
          />
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>RECORDÁMELO</Text>
      <TextInput
        style={styles.emailTextInput}
        label="Nombre"
        value={name}
        onChangeText={setName}
        variant="outlined"
        color={Colors.primary}
      />
      <TextInput
        style={styles.emailTextInput}
        label="Celular"
        value={phone}
        onChangeText={setPhone}
        variant="outlined"
        color={Colors.primary}
      />
      <TextInput
        style={styles.emailTextInput}
        label="Correo"
        value={email}
        onChangeText={setEmail}
        variant="outlined"
        color={Colors.primary}
      />
      <TextInput
        style={styles.passwordTextInput}
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        variant="outlined"
        color={Colors.primary}
      />
      <TextInput
        style={styles.passwordTextInput}
        label="Confirmar contraseña"
        value={password2}
        onChangeText={setPassword2}
        secureTextEntry={true}
        variant="outlined"
        color={Colors.primary}
      />
      <Button title="Crear" color={Colors.primary} onPress={() => { setVisible(true) }} />
      <TouchableOpacity onPress={() => goBack()}>
        <Text style={styles.noAccountText}>¿Tienes una cuenta? <Text style={styles.signupText}>Ingresa</Text></Text>
      </TouchableOpacity>
      <InfoDialog />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 93,
    color: Colors.secondary,
    fontSize: 24,
    lineHeight: 25
  },
  emailTextInput: {
    marginBottom: 16,
  },
  passwordTextInput: {
    marginBottom: 16,
  },
  noAccountText: {
    marginVertical: 42,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25
  },
  signupText: {
    color: '#0C5CF2',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25
  }
});

const SignUpProvider = () => (
  <Provider>
    <SignUp />
  </Provider>
);

export default SignUpProvider;
