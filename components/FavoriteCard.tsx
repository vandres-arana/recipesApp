import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native'
import { Recipe } from '../models'
import { COLORS } from '../styles'

const CARD_HEIGHT = 175;
const height = Dimensions.get("window").height * 0.7;

type FavoriteCardProps = {
    recipe: Recipe,
    goToRecipeDetails: (recipe: Recipe) => void,
    y: Animated.Value,
    index: number,
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({
    recipe,
    goToRecipeDetails,
    y,
    index,
}) => {
    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    const isAppearing = height;
    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: "clamp",
            })
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 4],
            extrapolate: "clamp",
        })
    )
    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolate: "clamp",
    })
    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
    })
    return (
        <Animated.View style={{ opacity, transform: [{ translateY }, { scale }] }}>
            <TouchableOpacity onPress={() => goToRecipeDetails(recipe)}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: recipe.image }}
                        style={styles.image} />
                    <Text style={styles.title}>{recipe.title}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
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
