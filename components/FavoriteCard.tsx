import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Recipe } from '../models'
import { COLORS } from '../styles'

type FavoriteCardProps = {
    recipe: Recipe,
    goToRecipeDetails: (recipe: Recipe) => void,
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({
    recipe,
    goToRecipeDetails
}) => {
    return (
        <TouchableOpacity onPress={() => goToRecipeDetails(recipe)}>
            <View style={styles.container}>
                <Image
                    source={{ uri: recipe.image }}
                    style={styles.image} />
                <Text style={styles.title}>{recipe.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavoriteCard

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
        backgroundColor: COLORS.Color3,
        borderRadius: 15,
        height: 150,
        width: Dimensions.get('window').width * 0.80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    title: {
        color: COLORS.White,
        fontWeight: '700',
        fontSize: 16,
        paddingLeft: 15,
    },
})
