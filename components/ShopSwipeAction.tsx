import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../styles'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type ShopSwipeActionProps = {
    itemId: number,
}

const ShopSwipeAction: React.FC<ShopSwipeActionProps> = ({
    itemId,
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
                <Ionicons name="checkmark-done-circle-outline" size={30} color={COLORS.White} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
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
