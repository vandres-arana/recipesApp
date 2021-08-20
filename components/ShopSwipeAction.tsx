import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../styles'
import { useDispatch } from 'react-redux';
import { deleteIngredientFromPantry, sendIngredientToPantry } from '../store/recipeSlice';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ShopSwipeActionProps = {
    itemId: number,
}

const ShopSwipeAction: React.FC<ShopSwipeActionProps> = ({
    itemId,
}) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => dispatch(sendIngredientToPantry(itemId))}>
                <MaterialCommunityIcons name="fridge" size={30} color={COLORS.White} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => dispatch(deleteIngredientFromPantry(itemId))}>
                <MaterialIcons name="delete-forever" size={30} color={COLORS.White} />
            </TouchableOpacity>
        </View>
    )
}

export default ShopSwipeAction

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 50,
        marginVertical: 10,
        backgroundColor: COLORS.Color2,
        borderRadius: 10,
    },
    option: {
        backgroundColor: COLORS.Color3,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})
