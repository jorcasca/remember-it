import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../../src/constants/constants';
import { Button } from "@react-native-material/core";
import RadioButton from '../../../src/components/RadioButton';

const Main = () => {
  const router = useRouter();
  const [selectedOptionYes, setSelectedOptionYes] = useState(false);
  const [selectedOptionNo, setSelectedOptionNo] = useState(true);

  const toogleRadioGroup = () => {
    setSelectedOptionYes(!selectedOptionYes);
    setSelectedOptionNo(!selectedOptionNo);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>CONFIGURACIÓN</Text>
        <Button title="Agregar pareja" color={Colors.primary} onPress={() => { router.push('settings/link') }} />
        <Text style={styles.subtitle}>¿Activar vibración de alerta?</Text>
        <View style={styles.radiosGroup}>
          <RadioButton option='SI' selectedOption={selectedOptionYes} setSelectedOption={toogleRadioGroup} />
          <View style={{ width: 80 }} />
          <RadioButton option='NO' selectedOption={selectedOptionNo} setSelectedOption={toogleRadioGroup} />
        </View>
      </View>
      <Button title="Cerrar sesión" color={Colors.primary} onPress={() => { router.dismissAll() }} />
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
    marginBottom: 68,
    color: Colors.secondary,
    fontSize: 24,
    lineHeight: 25
  },
  subtitle: {
    marginTop: 58,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 25
  },
  radiosGroup: {
    marginTop: 16,
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default Main;
