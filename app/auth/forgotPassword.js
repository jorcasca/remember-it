import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Provider } from "@react-native-material/core";
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { useRouter } from 'expo-router';
import Colors from '../../src/constants/constants';

const ForgotPassword = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');

  const goBack = () => {
    setVisible(false);
    router.dismiss();
  }

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => goBack()}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>Enlace enviado a tu correo.</Text>
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
        label="Correo"
        value={email}
        onChangeText={setEmail}
        variant="outlined"
        color={Colors.primary}
      />
      <Button title="Recuperar" color={Colors.primary} onPress={() => { setVisible(true) }} />
      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.noAccountText}>¿No recibió un correo? <Text style={styles.signupText}>Enviar de nuevo</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.dismiss()}>
        <Text style={styles.forgotPasswordText}>Volver</Text>
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

const ForgotPasswordProvider = () => (
  <Provider>
    <ForgotPassword />
  </Provider>
);

export default ForgotPasswordProvider;
