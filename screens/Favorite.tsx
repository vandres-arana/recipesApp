import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getFavorites } from '../store/recipeSlice'

const Favorite: React.FC = () => {
    const recipes = useSelector(getFavorites)
    return (
        <View style={styles.container}>
            <Text>Favorite Recipes Screen</Text>
            <Text>Under Construction!</Text>
            <Text>{recipes.length}</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
