import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { TextInput, Button, Provider } from "@react-native-material/core";
import Colors from '../../../src/constants/constants';
import { useRouter } from 'expo-router';

const Link = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [id, setID] = useState('');

  const goBack = () => {
    setVisible(false);
    router.dismiss();
  }

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => goBack()}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>¡Vinculación exitosa!</Text>
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
      <View>
        <Text style={styles.subtitle}>Asignar pareja:</Text>
        <TextInput
          style={styles.emailTextInput}
          label="ID"
          value={id}
          onChangeText={setID}
          variant="outlined"
          color={Colors.primary}
        />
        <Text style={styles.explanation}>Recuerda que el ID lo podrás encontrar en el menu de perfil de tu pareja.</Text>
      </View>
      <View>
        <Button title="Agregar" color={Colors.primary} onPress={() => { setVisible(true) }} />
        <View style={{ height: 16 }} />
        <Button title="Cancelar" variant="outlined" color={Colors.primary} onPress={() => { goBack() }} />
      </View>
      <InfoDialog />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  subtitle: {
    marginBottom: 40,
    fontSize: 14,
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

const LinkProvider = () => (
  <Provider>
    <Link />
  </Provider>
);

export default LinkProvider;
