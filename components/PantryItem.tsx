import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ShoptItem } from '../models'
import { COLORS } from '../styles'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteIngredientFromPantry } from '../store/recipeSlice';

type PantryItemProps = {
    item: ShoptItem,
}

const PantryItem: React.FC<PantryItemProps> = ({
    item,
}) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{item.name}</Text>
            <TouchableOpacity onPress={() => dispatch(deleteIngredientFromPantry(item.id))}>
                <MaterialIcons name="delete-forever" size={30} color={COLORS.White} />
            </TouchableOpacity>
        </View>
    )
}

export default PantryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Color3,
        paddingHorizontal: 8,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        paddingLeft: 20,
        paddingRight: 10,
    },
    label: {
        fontWeight: '500',
        fontSize: 15,
        color: COLORS.Black,
    },
})
