import React from 'react';
import { Stack } from 'expo-router/stack';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name='signin' options={{ headerShown: false }} />
            <Stack.Screen name='signup' options={{ headerShown: false }} />
            <Stack.Screen name='forgotPassword' options={{ headerShown: false }} />
        </Stack>
    );
}

export default Layout;
