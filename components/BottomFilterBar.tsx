import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { FilterData } from '../models'
import { COLORS } from '../styles'
import BottomFilter from './BottomFilter'

type BottomFilterBarProps = {
    barId: number,
    selectedFilter: number,
    selectFilter: (id: number, index: number) => void,
    filters: FilterData[],
}

const BottomFilterBar: React.FC<BottomFilterBarProps> = ({
    selectedFilter,
    selectFilter,
    filters,
    barId,
}) => {
    const FilterItem = (props: any) => {
        return <BottomFilter filterbarId={barId} item={props.item} isSelected={props.item.id === selectedFilter} selectFilter={selectFilter} />
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

export default BottomFilterBar

const styles = StyleSheet.create({
    container: {
        height: 40,
    },
    innerContainer: {
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    labelContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        height: 40,
        backgroundColor: COLORS.Color3,
        borderRadius: 5,
        justifyContent: 'center'
    },
})
