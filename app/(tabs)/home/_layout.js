import React from 'react';
import { Stack } from 'expo-router/stack';
import Colors from '../../../src/constants/constants';

const Layout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white
        }}>
            <Stack.Screen name='main' options={{ headerShown: false }} />
            <Stack.Screen name='edit' options={{ title: 'EDITAR EVENTO' }} />
            <Stack.Screen name='create' options={{ title: 'CREAR EVENTO' }} />
        </Stack>
    );
}

export default Layout;
