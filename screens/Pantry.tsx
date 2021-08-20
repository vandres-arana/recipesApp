import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { PantryItem } from '../components'
import { SHOPLISTITEMS } from '../static'
import { COLORS } from '../styles'

const Pantry = () => {
    const renderItem = (props: any) => {
        return <PantryItem item={props.item} />
    }

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantry</Text>
            <FlatList
                data={SHOPLISTITEMS}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                style={styles.list}
            />
        </View>
    )
}

export default Pantry

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.Color4,
        paddingTop: 30,
    },
    title: {
        fontWeight: '800',
        fontSize: 19,
        color: COLORS.Color1,
        marginBottom: 20,
    },
    list: {
        width: Dimensions.get("window").width * 0.8,
    }
})
