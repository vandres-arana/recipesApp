import React from 'react'
import { StyleSheet, } from 'react-native'
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
        <RecipeCarousel goToRecipeDetails={goToRecipeDetails}/>
    )
}

export default Recipes

const styles = StyleSheet.create({})
