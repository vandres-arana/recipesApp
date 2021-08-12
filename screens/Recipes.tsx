import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import routes from '../navigation/routes';
import { RecipeCarousel, CustomSearchBar, FiltersBar, FiltersBottomSheet } from '../components';
import RecipesService from '../services/RecipesService';
import RecipesStorage from '../services/RecipesStorage';
import { FILTERS } from '../static';
import { COLORS } from '../styles';
import { Recipe } from '../models';
import { useState } from 'react';

type RecipesState = {
    displayFiltersSheet: boolean,
}

type RecipesProps = {
    navigation: StackNavigationProp<any>,
}



const Recipes: React.FC<RecipesProps> = ({
    navigation,
}) => {
    const [displayFiltersSheet, setDisplayFiltersSheet] = useState(false);

    const goToRecipeDetails = (recipe: Recipe) => {
        navigation.push(routes.HOME.DETAIL, { recipe: recipe })
    }

    const displayBottomFiltersSheet = () => {
        setDisplayFiltersSheet(true)
    }

    return (
        <>
            <View style={styles.container}>
                <CustomSearchBar />
                <RecipeCarousel goToRecipeDetails={goToRecipeDetails} />
                <FiltersBar displayFilters={displayBottomFiltersSheet} />
            </View>
            <FiltersBottomSheet display={displayFiltersSheet} />
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
