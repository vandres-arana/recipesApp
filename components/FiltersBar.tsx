import React from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import { FILTERS } from '../static'
import Filter from './Filter'
import { Octicons } from '@expo/vector-icons';
import { COLORS } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { displayBottomSheet, getSearchId } from '../store/recipeSlice';

const FiltersBar: React.FC = () => {
    const filters = FILTERS;
    const dispatch = useDispatch()
    const selectedFilter = useSelector(getSearchId)
    const FilterItem = (props: any) => {
        return <Filter item={props.item} isSelected={props.item.id === selectedFilter} />
    }

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    const displayFilters = () => {
        dispatch(displayBottomSheet(true))
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.labelContainer} onPress={() => displayFilters()}>
                    <Octicons name="settings" size={24} color={COLORS.White} />
                </TouchableOpacity>
                <FlatList
                    horizontal={true}
                    data={filters}
                    renderItem={FilterItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                />
            </View>
        </View>
    )
}

export default FiltersBar

const styles = StyleSheet.create({
    container: {
        height: 50,
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
