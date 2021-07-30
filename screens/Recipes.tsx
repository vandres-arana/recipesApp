import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCarousel from '../components/RecipeCarousel'
import routes from '../navigation/routes';
import CustomSearchBar from '../components/CustomSearchBar';
import { RECIPES } from '../static/recipes';
import { useState } from 'react';

type RecipesProps = {
    navigation: StackNavigationProp<any>
}

const Recipes: React.FC<RecipesProps> = ({ navigation }) => {
    const [recipes, setRecipes] = useState(RECIPES);

    const goToRecipeDetails = () => {
        navigation.push(routes.HOME.DETAIL)
    }

    const onChangeText = (search: string) => {
        if (search.length === 0) {
            setRecipes(RECIPES)
        } else {
            setRecipes([RECIPES[0]])
        }
    }

    console.log("RENDER")
    return (
        <View style={styles.container}>
            <CustomSearchBar onChangeText={onChangeText}/>
            <RecipeCarousel goToRecipeDetails={goToRecipeDetails} recipeList={recipes}/>
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
