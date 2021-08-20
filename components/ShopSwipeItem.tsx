import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ShoptItem } from '../models'
import { COLORS } from '../styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ShopSwipeItemProps = {
    item: ShoptItem,
}

const ShopSwipeItem: React.FC<ShopSwipeItemProps> = ({
    item,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{item.name}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="gesture-swipe-left" size={30} color={COLORS.White} />
            </TouchableOpacity>
        </View>
    )
}

export default ShopSwipeItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Color2,
        paddingHorizontal: 8,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
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
