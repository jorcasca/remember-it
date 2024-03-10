import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { TextInput, Button, Provider } from "@react-native-material/core";
import Colors from '../../../src/constants/constants';
import { useRouter } from 'expo-router';
import Checkbox from '../../../src/components/CheckBox';

const EditEvent = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);

  const goBack = () => {
    setVisible(false);
    router.dismiss();
  }

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => goBack()}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>¡Actualización exitosa!</Text>
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
          label="Fecha"
          value={date}
          onChangeText={setDate}
          variant="outlined"
          color={Colors.primary}
        />
        <TextInput
          style={styles.emailTextInput}
          label="Hora"
          value={hour}
          onChangeText={setHour}
          variant="outlined"
          color={Colors.primary}
        />
        <TextInput
          label="Descripción"
          value={description}
          onChangeText={setDescription}
          textAlignVertical='top'
          inputContainerStyle={{ paddingTop: 10 }}
          maxLength={300}
          multiline
          numberOfLines={7}
          variant="outlined"
          color={Colors.primary}
        />
        <Text style={styles.descriptionHelper}>{description.length + '/300'}</Text>
        <Text style={styles.shareText}>Compartir con:</Text>
        <View style={{ alignItems: 'center' }}>
          <Checkbox option={'Salma Hayek'} checked={checked} onChangeCheck={() => setChecked(!checked)} />
        </View>
      </View>
      <View>
        <Button title="Actualizar" color={Colors.primary} onPress={() => { setVisible(true) }} />
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
    justifyContent: 'space-between',
  },
  emailTextInput: {
    marginBottom: 16,
  },
  descriptionHelper: {
    textAlign: 'right',
    fontSize: 14,
    lineHeight: 25
  },
  shareText: {
    fontSize: 14,
    lineHeight: 25
  }
});

const EditEventProvider = () => (
  <Provider>
    <EditEvent />
  </Provider>
);

export default EditEventProvider;
