import React from 'react';
import { Stack } from 'expo-router/stack';

const Layout = () => {
    return (
        <Stack screenOptions={ { headerShown: false } }/>
    );
}

export default Layout;