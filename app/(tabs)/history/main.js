import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Colors from '../../../src/constants/constants';
import EventCard from '../../../src/components/EventCard';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>HISTORIAL</Text>
      <Text style={styles.subtitle}>Últimos eventos realizados:</Text>
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
        />
        <EventCard
          title={'Evento 4'}
          date={'29/02/2024'}
          hour={'18:50:33'}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
          isShared={true}
        />
        <EventCard
          title={'Evento 3'}
          date={'29/02/2024'}
          hour={'18:50:33'}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
          isShared={true}
        />
        <EventCard
          title={'Evento 2'}
          date={'29/02/2024'}
          hour={'18:50:33'}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
          isShared={true}
        />
        <EventCard
          title={'Evento 1'}
          date={'29/02/2024'}
          hour={'18:50:33'}
          description={'Lorem ipsum dolor sit amet consectetur adipiscing elit turpis, porta litora risus penatibus curabitur et enim egestas...'}
          isShared={true}
        />
      </ScrollView>
    </SafeAreaView>
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
  subtitle: {
    marginStart: 20,
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 25
  },
});

export default Main;
