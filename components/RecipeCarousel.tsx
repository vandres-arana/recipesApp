import React, { Component } from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { RECIPES } from '../static/recipes';

type RecipeCarouselProps = {
    goToRecipeDetails: () => void
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
    goToRecipeDetails
}) => {
    const CarouselItem = (props: any) => {
        return <RecipeCard goToRecipeDetails={goToRecipeDetails} item={props.item} />
    }

    return (
        <View style={styles.carouselContainer}>
            <Carousel
                data={RECIPES}
                renderItem={CarouselItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width * 0.80}
                contentContainerCustomStyle={styles.carousel}
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
