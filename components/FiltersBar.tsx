import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FILTERS } from '../static'
import Filter from './Filter'

const FiltersBar = () => {
    const filters = FILTERS
    const FilterItem = (props: any) => {
        return <Filter name={props.item} index={props.index} />
    }

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={filters}
                renderItem={FilterItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
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
