import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import RecipeCarousel from '../components/RecipeCarousel'
import routes from '../navigation/routes';
import CustomSearchBar from '../components/CustomSearchBar';
import { RECIPES } from '../static/recipes';
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
            recipes: RECIPES,
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
        // const recipe = await RecipesService.getRecipeDetails('b79327d05b8e5b838ad6cfd9576b30b6')
        
    }

    componentDidMount() {
        this.loadRecipes()
    }

    goToRecipeDetails = () => {
        this.props.navigation.push(routes.HOME.DETAIL)
    }

    onChangeText = (search: string) => {
        if (search.length === 0) {
            this.setState({ recipes: RECIPES })
        } else {
            this.setState({ recipes: [RECIPES[0]] })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomSearchBar onChangeText={this.onChangeText} />
                <RecipeCarousel goToRecipeDetails={this.goToRecipeDetails} recipeList={this.state.recipes} />
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
