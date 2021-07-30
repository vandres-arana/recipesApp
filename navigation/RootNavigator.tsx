import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.HOME.INDEX} component={BottomTabNavigator} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator
