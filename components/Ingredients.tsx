import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ingredient } from '../models'
import { LABELS } from '../static'
import { COLORS } from '../styles'

type IngredientsProps = {
    ingredients: Ingredient[],
}

const Ingredients: React.FC<IngredientsProps> = ({
    ingredients,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{LABELS.INGREDIENTS}</Text>
            <View style={styles.listContainer}>
                {ingredients.map((item, index) => {
                    return <Text key={index} style={styles.ingredient}>- {item.text}</Text>
                })}
            </View>
        </View>
    )
}

export default Ingredients

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        color: COLORS.Color2,
        fontSize: 16,
        fontWeight: '700',
    },
    listContainer: {
        paddingVertical: 10,
    },
    ingredient: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.Black,
        marginVertical: 5,
    },
})
