import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Recipe } from '../models'
import { getFavorites } from '../store/recipeSlice'
import { COLORS } from '../styles'
import FavoriteCard from './FavoriteCard'

type FavoriteRecipesProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
}

const FavoriteRecipes: React.FC<FavoriteRecipesProps> = ({
    goToRecipeDetails,
}) => {
    const favoriteRecipes = useSelector(getFavorites)
    const FilterItem = (props: any) => {
        return <FavoriteCard recipe={props.item} goToRecipeDetails={goToRecipeDetails}/>
    }

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorite Recipes</Text>
            <FlatList
                data={favoriteRecipes}
                renderItem={FilterItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
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
