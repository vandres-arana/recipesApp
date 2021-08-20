import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { COLORS } from '../styles'

type EmptyCarouselProps = {
    label: string,
}

const EmptyCarousel: React.FC<EmptyCarouselProps> = ({
    label,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
        </View>
    )
}

export default EmptyCarousel

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.Color2,
        fontWeight: '700',
        fontSize: 20,
    },
})
