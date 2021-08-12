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

type RecipesState = {
    displayFiltersSheet: boolean,
}

type RecipesProps = {
    navigation: StackNavigationProp<any>,
}



class Recipes extends Component<RecipesProps, RecipesState>  {

    constructor(props: RecipesProps) {
        super(props);
        this.state = {
            displayFiltersSheet: false,
        }
    }

    goToRecipeDetails = (recipe: Recipe) => {
        this.props.navigation.push(routes.HOME.DETAIL, { recipe: recipe })
    }

    displayFiltersSheet = () => {
        this.setState({ displayFiltersSheet: true })
    }

    filterRecipes = async (values: number[]) => {
        // this.setState({
        //     recipes: [],
        //     displayFiltersSheet: false,
        // })
        // const recipesApi = await RecipesService.getRecipesWithValues(this.state.currentSearch, values);
        // this.setState({
        //     recipes: recipesApi,
        //     displayFiltersSheet: false,
        // });
    }

    render() {
        const { displayFiltersSheet } = this.state;
        return (
            <>
                <View style={styles.container}>
                    <CustomSearchBar />
                    <RecipeCarousel goToRecipeDetails={this.goToRecipeDetails} />
                    <FiltersBar displayFilters={this.displayFiltersSheet} />
                </View>
                <FiltersBottomSheet filterRecipes={this.filterRecipes} display={displayFiltersSheet} />
            </>
        )
    }
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
