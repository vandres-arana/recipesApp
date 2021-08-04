import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { FILTERS } from '../static'
import Filter from './Filter'

type FiltersBarProps = {
    selectedFilter: number,
    selectFilter: (index: number) => void
}

const FiltersBar: React.FC<FiltersBarProps> = ({
    selectedFilter,
    selectFilter,
}) => {
    const filters = FILTERS;
    const FilterItem = (props: any) => {
        return <Filter item={props.item} isSelected={props.item.id === selectedFilter} selectFilter={selectFilter} />
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
