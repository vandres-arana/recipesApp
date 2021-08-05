import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LABELS } from '../static'
import { COLORS } from '../styles'

type RecipeVideoProps = {
    url: string,
}

const RecipeVideo: React.FC<RecipeVideoProps> = ({
    url
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{LABELS.TUTORIAL}</Text>
        </View>
    )
}

export default RecipeVideo

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.Color2,
    },
})
