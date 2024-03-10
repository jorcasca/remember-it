import React from 'react'
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
            <Stack.Screen name='link' options={{ title: 'VINCULAR' }} />
        </Stack>
    );
}

export default Layout;
