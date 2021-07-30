import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import routes from './routes';
import { Favorite, Pantry, Profile, Recipes, Shoplist } from '../screens';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={routes.HOME.RECIPES}
            activeColor="#f0edf6"
            barStyle={{ backgroundColor: 'green' }}>
            <Tab.Screen
                name={routes.HOME.RECIPES}
                component={Recipes} options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="list-alt" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.FAVORITE}
                component={Favorite}
                options={{
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="heart" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.SHOPLIST}
                component={Shoplist}
                options={{
                    tabBarLabel: 'Shoplist',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.PANTRY}
                component={Pantry}
                options={{
                    tabBarLabel: 'Pantry',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="fridge-outline" color={color} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: 'Shoplist',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" color={color} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})
