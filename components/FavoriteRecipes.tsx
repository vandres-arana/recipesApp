import React from 'react'
import { StyleSheet, FlatList, View, Text, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import { Recipe } from '../models'
import { getFavorites } from '../store/recipeSlice'
import { COLORS } from '../styles'
import EmptyCarousel from './EmptyCarousel'
import FavoriteCard from './FavoriteCard'

type FavoriteRecipesProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({
    goToRecipeDetails,
}) => {
    const favoriteRecipes = useSelector(getFavorites)

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    const y = new Animated.Value(0);

    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
        useNativeDriver: true,
    });

    const FilterItem = (props: any) => {
        return <FavoriteCard recipe={props.item} goToRecipeDetails={goToRecipeDetails} y={y} index={props.index} />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorite Recipes</Text>
            <AnimatedFlatList
                scrollEventThrottle={16}
                data={favoriteRecipes}
                renderItem={FilterItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <EmptyCarousel label="You don't have any favorite recipe yet. Add one!" />}
                {...{ onScroll }}
            />
        </View>
    )
}

export default FavoriteRecipes

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 19,
        color: COLORS.Color1,
        marginBottom: 30,
    },
})
