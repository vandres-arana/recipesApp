import React, { useEffect } from 'react'
import { StyleSheet, Dimensions, View, Button, Text } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { Recipe } from '../models';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipesFromApi } from '../store/recipeSlice';
import { RootState } from '../store';

type RecipeCarouselProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
    goToRecipeDetails,
}) => {
    const dispatch = useDispatch()
    const recipeList = useSelector((state: RootState) => state.recipes.recipes)
    const currentSearch = useSelector((state: RootState) => state.recipes.currentSearch.title)
    const filters = useSelector((state: RootState) => state.recipes.advancedFilters)

    const CarouselItem = (props: any) => {
        return <RecipeCard goToRecipeDetails={goToRecipeDetails} item={props.item} />
    }

    useEffect(() => {
        dispatch(loadRecipesFromApi({
            search: currentSearch,
            filters
        }));
    }, []);

    return (
        <View style={styles.carouselContainer}>
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
