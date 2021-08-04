import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LABELS } from '../static'
import { COLORS } from '../styles'

type RecipeInfoProps = {
    totalTime: number,
    calories: number,
}

const RecipeInfo: React.FC<RecipeInfoProps> = ({
    totalTime,
    calories
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{LABELS.TOTALTIME}</Text>
                <Text style={styles.label}>{totalTime} min.</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{LABELS.CALORIES}</Text>
                <Text style={styles.label}>{calories.toFixed(2)} cal.</Text>
            </View>
        </View>
    )
}

export default RecipeInfo

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLORS.Color4,
    },
    innerContainer: {

    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.Color2,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.Black,
    },
})
