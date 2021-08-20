import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated } from 'react-native'
import { ShoptItem } from '../models'
import { COLORS } from '../styles'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteIngredientFromPantry } from '../store/recipeSlice';

const CARD_HEIGHT = 70;
const height = Dimensions.get("window").height * 0.7;

type PantryItemProps = {
    item: ShoptItem,
    y: Animated.Value,
    index: number,
}

const PantryItem: React.FC<PantryItemProps> = ({
    item,
    y,
    index,
}) => {
    const dispatch = useDispatch()
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
        <Animated.View style={[styles.container, { opacity, transform: [{ translateY }, { scale }] }]}>
            <Text style={styles.label}>{item.name}</Text>
            <TouchableOpacity onPress={() => dispatch(deleteIngredientFromPantry(item.id))}>
                <MaterialIcons name="delete-forever" size={30} color={COLORS.White} />
            </TouchableOpacity>
        </Animated.View>
    )
}

export default PantryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Color3,
        paddingHorizontal: 8,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    label: {
        fontWeight: '500',
        fontSize: 15,
        color: COLORS.Black,
    },
})
