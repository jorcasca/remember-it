import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { TextInput, Button, Provider } from "@react-native-material/core";
import Colors from '../../../src/constants/constants';

const Main = () => {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>¡Actualización exitosa!</Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Ok"
            variant="text"
            color={Colors.primary}
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>PERFIL</Text>
        <Text style={styles.subtitle}>ID 2432</Text>
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
        <Text style={styles.explanation}>Tu pareja utilizará el ID para agregarte como pareja.</Text>
      </View>
      <Button title="Actualizar" color={Colors.primary} onPress={() => { setVisible(true) }} />
      <InfoDialog />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  titleText: {
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 30,
    color: Colors.secondary,
    fontSize: 24,
    lineHeight: 25
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 25
  },
  emailTextInput: {
    marginBottom: 16,
  },
  explanation: {
    color: Colors.secondary,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 25
  },
});

const MainProvider = () => (
  <Provider>
    <Main />
  </Provider>
);

export default MainProvider;
