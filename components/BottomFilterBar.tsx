import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { FilterData } from '../models'
import { RootState } from '../store'
import { COLORS } from '../styles'
import BottomFilter from './BottomFilter'

type BottomFilterBarProps = {
    barId: number,
    filters: FilterData[],
}

const BottomFilterBar: React.FC<BottomFilterBarProps> = ({
    filters,
    barId,
}) => {
    const selectedFilter = useSelector((state: RootState) => state.recipes.advancedFilters[barId].id)
    const FilterItem = (props: any) => {
        return <BottomFilter filterbarId={barId} item={props.item} isSelected={props.item.id === selectedFilter} />
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
