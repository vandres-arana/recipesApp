import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLORS } from '../styles'

const EmptyCarousel: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>No recipe found!</Text>
        </View>
    )
}

export default EmptyCarousel

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.Color1,
        fontWeight: '700',
        fontSize: 20,
    },
})
