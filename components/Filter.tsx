import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FilterData } from '../models'
import { COLORS } from '../styles'

type FilterProps = {
    item: FilterData,
    isSelected: boolean,
    selectFilter: (index: number) => void
}

const Filter: React.FC<FilterProps> = ({
    item,
    isSelected,
    selectFilter,
}) => {
    const pressFilter = () => {
        selectFilter(item.id)
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
