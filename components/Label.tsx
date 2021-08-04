import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../styles'

type LabelProps = {
    title: string,
}

const Label: React.FC<LabelProps> = ({
    title,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
        </View>
    )
}

export default Label

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 30,
        paddingHorizontal: 10,
        backgroundColor: COLORS.Color3,
        borderRadius: 5,
        justifyContent: 'center'
    },
    label: {
        color: COLORS.White,
        fontSize: 16,
        fontWeight: '700',
    },
})
