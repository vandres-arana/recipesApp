import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { Recipe } from '../models';

type RecipeCarouselProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
    recipeList: Recipe[],
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
    goToRecipeDetails,
    recipeList,
}) => {
    const CarouselItem = (props: any) => {
        return <RecipeCard goToRecipeDetails={goToRecipeDetails} item={props.item} />
    }

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
