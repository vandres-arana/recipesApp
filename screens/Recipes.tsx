import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import routes from '../navigation/routes';
import { RecipeCarousel, CustomSearchBar, FiltersBar, FiltersBottomSheet } from '../components';
import { COLORS } from '../styles';
import { Recipe } from '../models';

type RecipesProps = {
    navigation: StackNavigationProp<any>,
}

const Recipes: React.FC<RecipesProps> = ({
    navigation,
}) => {
    const goToRecipeDetails = (recipe: Recipe) => {
        navigation.push(routes.HOME.DETAIL, { recipe: recipe })
    }

    return (
        <>
            <View style={styles.container}>
                <CustomSearchBar />
                <RecipeCarousel goToRecipeDetails={goToRecipeDetails} />
                <FiltersBar />
            </View>
            <FiltersBottomSheet />
        </>
    )
}

export default Recipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: COLORS.Color4,
    },
})
