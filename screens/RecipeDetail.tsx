import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';

type RecipeDetailsProps = {
    navigation: StackNavigationProp<any>
}

const RecipeDetail: React.FC<RecipeDetailsProps> = ({ navigation }) => {
    const returnToRecipes = () => {
        navigation.pop()
    }
    return (
        <View style={styles.container}>
            <Text>Recipe Detail Screen</Text>
            <Text>Under Construction!</Text>
            <TouchableOpacity onPress={returnToRecipes}>
                <Text>Return</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RecipeDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
