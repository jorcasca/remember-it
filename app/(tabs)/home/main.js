import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../../src/constants/constants';
import EventCard from '../../../src/components/EventCard';
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import { FAB, Provider, Button } from '@react-native-material/core';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Main = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const InfoDialog = () => {
    return (
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Mensaje" />
        <DialogContent>
          <Text>¿Desea eliminar el evento?</Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="NO"
            variant="text"
            color={Colors.primary}
            onPress={() => setVisible(false)}
          />
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
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>EVENTOS</Text>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={true}
        >
          <EventCard
            title={'Evento 5'}
            date={'29/02/2024'}
            hour={'18:50:33'}
            description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
            isShared={true}
            onDelete={() => { setVisible(true) }}
            onEdit={() => { router.push('home/edit') }}
          />
          <EventCard
            title={'Evento 4'}
            date={'29/02/2024'}
            hour={'18:50:33'}
            description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
            isShared={false}
            onDelete={() => { setVisible(true) }}
            onEdit={() => { router.push('home/edit') }}
          />
          <EventCard
            title={'Evento 3'}
            date={'29/02/2024'}
            hour={'18:50:33'}
            description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
            isShared={false}
            onDelete={() => { setVisible(true) }}
            onEdit={() => { router.push('home/edit') }}
          />
          <EventCard
            title={'Evento 2'}
            date={'29/02/2024'}
            hour={'18:50:33'}
            description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
            isShared={true}
            onDelete={() => { setVisible(true) }}
            onEdit={() => { router.push('home/edit') }}
          />
          <EventCard
            title={'Evento 1'}
            date={'29/02/2024'}
            hour={'18:50:33'}
            description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
            isShared={true}
            onDelete={() => { setVisible(true) }}
            onEdit={() => { router.push('home/edit') }}
          />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.fabContainer}>
        <FAB
          icon={props => <FontAwesome name="plus" color={Colors.white} />}
          color={Colors.secondary}
          onPress={() => router.push('home/create')}
        />
      </View>
      <InfoDialog />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
  titleText: {
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 30,
    color: Colors.secondary,
    fontSize: 24,
    lineHeight: 25
  },
  fabContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

const MainProvider = () => (
  <Provider>
    <Main />
  </Provider>
);

export default MainProvider;
