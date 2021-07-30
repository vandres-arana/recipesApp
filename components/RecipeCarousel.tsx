import React, { Component } from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { RECIPES } from '../static/recipes';

class RecipeCarousel extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Recipes</Text>
                {/* <RecipeCard /> */}
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={RECIPES}
                        renderItem={RecipeCard}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width * 0.80}
                        contentContainerCustomStyle={styles.carousel}
                    />
                </View>
                <Text>Filters</Text>
            </ View>
        )
    }
}

export default RecipeCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    carouselContainer: {
        height: Dimensions.get('window').height * 0.70,
    },
    carousel: {
        paddingLeft: 10,
    }
})
