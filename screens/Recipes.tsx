import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCarousel from '../components/RecipeCarousel'
import routes from '../navigation/routes';

type RecipesProps = {
    navigation: StackNavigationProp<any>
}

const Recipes: React.FC<RecipesProps> = ({ navigation }) => {
    const goToRecipeDetails = () => {
        navigation.push(routes.HOME.DETAIL)
    }

    return (
        <View style={styles.container}>
            <Text>Search Bar</Text>
            <RecipeCarousel goToRecipeDetails={goToRecipeDetails} />
            <Text>Filters</Text>
        </View>
    )
}

export default Recipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})
