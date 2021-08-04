import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../styles'

type filterProps = {
    name: string,
    index: number,
}

const Filter: React.FC<filterProps> = ({
    name,
    index,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{name}</Text>
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Color3, //7F8B52
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    label: {
        color: COLORS.White,
    }
})
