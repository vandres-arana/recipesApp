import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import routes from '../navigation/routes';
import { RecipeCarousel, CustomSearchBar, FiltersBar } from '../components';
import RecipesService from '../services/RecipesService';
import RecipesStorage from '../services/RecipesStorage';
import { FILTERS } from '../static';
import { COLORS } from '../styles';
import { Recipe } from '../models';

type RecipesState = {
    recipes: any,
    selectedFilter: number,
}

type RecipesProps = {
    navigation: StackNavigationProp<any>,
}

class Recipes extends Component<RecipesProps, RecipesState>  {

    constructor(props: RecipesProps) {
        super(props);
        this.state = {
            recipes: [],
            selectedFilter: 0,
        }
    }

    loadRecipes = async () => {
        const recipesDB = await RecipesStorage.getRecipes();
        if (recipesDB.length == 0) {
            const recipesApi = await RecipesService.getRecipes(FILTERS[this.state.selectedFilter].title);
            this.setState({ recipes: recipesApi });
            RecipesStorage.saveRecipes(recipesApi);
            return;
        }
        this.setState({ recipes: recipesDB })
    }

    componentDidMount() {
        this.loadRecipes()
    }

    goToRecipeDetails = (recipe: Recipe) => {
        this.props.navigation.push(routes.HOME.DETAIL, { recipe: recipe })
    }

    searchRecipe = async (search: string) => {
        this.setState({
            recipes: [],
            selectedFilter: -1,
        })
        const recipesApi = await RecipesService.getRecipes(search);
        this.setState({
            recipes: recipesApi,
        });
    }

    filterRecipes = async (index: number) => {
        this.setState({
            recipes: [],
            selectedFilter: index,
        })
        const recipesApi = await RecipesService.getRecipes(FILTERS[index].title);
        this.setState({
            recipes: recipesApi,
        });
    }

    render() {
        const { recipes, selectedFilter } = this.state;
        return (
            <View style={styles.container}>
                <CustomSearchBar changeText={this.searchRecipe} />
                <RecipeCarousel goToRecipeDetails={this.goToRecipeDetails} recipeList={recipes} />
                <FiltersBar selectedFilter={selectedFilter} selectFilter={this.filterRecipes} />
            </View>
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
