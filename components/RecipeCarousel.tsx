import React, { useEffect } from 'react'
import { StyleSheet, Dimensions, View, Button, Text } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { Recipe } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, loadRecipes } from '../store/recipeSlice';
import { RootState } from '../store';
import RecipesService from '../services/RecipesService';

type RecipeCarouselProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
    recipeList: Recipe[],
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
    goToRecipeDetails,
    recipeList,
}) => {
    const dispatch = useDispatch()
    const counter = useSelector((state: RootState) => state.recipes.counter);
    const recipesStore = useSelector((state: RootState) => state.recipes.recipes)

    const CarouselItem = (props: any) => {
        return <RecipeCard goToRecipeDetails={goToRecipeDetails} item={props.item} />
    }

    const loadRecipesFromApi = async () => {
        console.log("LOADING")
        let recipesApi = await RecipesService.getRecipes('chicken');
        dispatch(loadRecipes(recipesApi));
    }

    useEffect(() => {
        loadRecipesFromApi();
    }, []);

    return (
        <View style={styles.carouselContainer}>
            <Text>{counter}</Text>
            <Text>{recipesStore.length}</Text>
            <Button title="+" onPress={() => dispatch(increment())} />
            <Button title="-" onPress={() => dispatch(decrement(5))} />
            <Carousel
                data={recipeList}
                renderItem={CarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width * 0.80}
                contentContainerCustomStyle={styles.carousel}
                initialNumToRender={7}
            />
        </View>
    )
}

export default RecipeCarousel

const styles = StyleSheet.create({
    carouselContainer: {
        height: Dimensions.get('window').height * 0.70,
    },
    carousel: {
        paddingLeft: 10,
    }
})
