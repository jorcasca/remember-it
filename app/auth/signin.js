import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from "@react-native-material/core";
import { useRouter } from 'expo-router';
import Colors from '../../src/constants/constants';

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>RECORDÁMELO</Text>
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
      <Button title="Ingresar" color={Colors.primary} onPress={() => { router.push('home/main') }} />
      <TouchableOpacity onPress={() => router.push('auth/signup')}>
        <Text style={styles.noAccountText}>¿Aún no tienes una cuenta? <Text style={styles.signupText}>Registrate</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('auth/forgotPassword')}>
        <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>
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
    marginTop: 52,
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
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#0C5CF2',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 25
  }
});


export default SignIn;
