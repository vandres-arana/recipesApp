import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import routes from './routes';
import { Favorite, Pantry, Profile, Recipes, Shoplist } from '../screens';
import { COLORS } from '../styles';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={routes.HOME.RECIPES}
            barStyle={styles.tabNavigator}
            activeColor={COLORS.Color4}>
            <Tab.Screen
                name={routes.HOME.RECIPES}
                component={Recipes} options={{
                    tabBarLabel: routes.HOME.RECIPES,
                    tabBarIcon: () => (
                        <FontAwesome5 name="list-alt" color={COLORS.Color4} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.FAVORITE}
                component={Favorite}
                options={{
                    tabBarLabel: routes.HOME.FAVORITE,
                    tabBarIcon: () => (
                        <FontAwesome5 name="heart" color={COLORS.Color4} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.SHOPLIST}
                component={Shoplist}
                options={{
                    tabBarLabel: routes.HOME.SHOPLIST,
                    tabBarIcon: () => (
                        <AntDesign name="shoppingcart" color={COLORS.Color4} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.PANTRY}
                component={Pantry}
                options={{
                    tabBarLabel: routes.HOME.PANTRY,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="fridge-outline" color={COLORS.Color4} size={24} />
                    ),
                }} />
            <Tab.Screen
                name={routes.HOME.PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: routes.HOME.PROFILE,
                    tabBarIcon: () => (
                        <FontAwesome5 name="user" color={COLORS.Color4} size={24} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabNavigator: {
        backgroundColor: COLORS.Color1,
    }
})
