import React, { Component } from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import RecipeCard from './RecipeCard';
import Carousel from 'react-native-snap-carousel';
import { RECIPES } from '../static/recipes';

class RecipeCarousel extends Component {

    render() {
        return (
            <>
                <Text>Recipes</Text>
                {/* <RecipeCard /> */}
                <Carousel
                    data={RECIPES}
                    renderItem={RecipeCard}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width * 0.80}
                    useScrollView={true}
                />
            </>
        )
    }
}

export default RecipeCarousel

const styles = StyleSheet.create({})
