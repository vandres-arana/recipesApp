import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCarousel from '../components/RecipeCarousel'
import routes from '../navigation/routes';
import CustomSearchBar from '../components/CustomSearchBar';
import RecipesService from '../services/RecipesService';
import RecipesStorage from '../services/RecipesStorage';

type RecipesState = {
    recipes: any,
}

type RecipesProps = {
    navigation: StackNavigationProp<any>,
}

class Recipes extends Component<RecipesProps, RecipesState>  {

    constructor(props: RecipesProps) {
        super(props);
        this.state = {
            recipes: [],
        }
    }

    loadRecipes = async () => {
        const recipesDB = await RecipesStorage.getRecipes();
        if (recipesDB.length == 0) {
            const recipesApi = await RecipesService.getRecipes();
            this.setState({ recipes: recipesApi });
            RecipesStorage.saveRecipes(recipesApi);
            return;
        }
        this.setState({ recipes: recipesDB })
    }

    componentDidMount() {
        this.loadRecipes()
    }

    goToRecipeDetails = () => {
        this.props.navigation.push(routes.HOME.DETAIL)
    }

    searchRecipe = async (search: string) => {
        this.setState({
            recipes: [],
        })
        const recipesApi = await RecipesService.getRecipes(search);
        this.setState({
            recipes: recipesApi,
        });
    }

    render() {
        const { recipes } = this.state;
        return (
            <View style={styles.container}>
                <CustomSearchBar changeText={this.searchRecipe} />
                <RecipeCarousel goToRecipeDetails={this.goToRecipeDetails} recipeList={recipes} />
                <Text>Filters</Text>
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
    },
})
