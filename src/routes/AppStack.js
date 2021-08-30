import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import ClientDetail from '../screens/ClientDetail';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="ClientDetail" component={ClientDetail} />
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;