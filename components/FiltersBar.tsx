import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Filter from './Filter'

const FiltersBar = () => {
    const filters = ['Italian', 'Mexican', 'American', 'Breakfast', 'Lunch', 'Dinner', 'Apple']
    const FilterItem = (props: any) => {
        return <Filter name={props.item} index={props.index} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={filters}
                renderItem={FilterItem}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default FiltersBar

const styles = StyleSheet.create({
    container: {
        height: 50,
    }
})
