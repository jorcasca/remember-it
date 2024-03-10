import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '../../src/constants/constants';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: Colors.white,
            tabBarActiveBackgroundColor: Colors.primary,
            tabBarInactiveBackgroundColor: Colors.primary,
            tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'Historial',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Configuración',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}

export default TabLayout;