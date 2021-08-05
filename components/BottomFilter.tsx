import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FilterData } from '../models'
import { COLORS } from '../styles'

type BottomFilterProps = {
    filterbarId: number,
    item: FilterData,
    isSelected: boolean,
    selectFilter: (id: number, index: number) => void
}

const BottomFilter: React.FC<BottomFilterProps> = ({
    item,
    isSelected,
    selectFilter,
    filterbarId
}) => {
    const pressFilter = () => {
        selectFilter(filterbarId, item.id)
    }
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isSelected ? COLORS.Color2 : COLORS.Color3 }]}
            onPress={pressFilter}>
            <Text style={styles.label}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default BottomFilter

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
