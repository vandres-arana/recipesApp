import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FilterData } from '../models'
import { RootState } from '../store'
import { getFilters, loadRecipesFromApi, updateSearch } from '../store/recipeSlice'
import { COLORS } from '../styles'

type FilterProps = {
    item: FilterData,
    isSelected: boolean,
}

const Filter: React.FC<FilterProps> = ({
    item,
    isSelected,
}) => {
    const dispatch = useDispatch()
    const filters = useSelector(getFilters)
    const pressFilter = () => {
        dispatch(updateSearch(item))
        dispatch(loadRecipesFromApi({
            search: item.title,
            filters,
        }))
    }

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isSelected ? COLORS.Color2 : COLORS.Color3 }]}
            onPress={pressFilter}>
            <Text style={styles.label}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
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
