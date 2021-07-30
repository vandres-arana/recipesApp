import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import BottomTabNavigator from './BottomTabNavigator';
import { RecipeDetail } from '../screens';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.HOME.INDEX} component={BottomTabNavigator} options={{ headerShown: false}}/>
            <Stack.Screen name={routes.HOME.DETAIL} component={RecipeDetail} options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default RootNavigator
