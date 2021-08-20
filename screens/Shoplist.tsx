import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { useSelector } from 'react-redux';
import { Shop, ShopListInput } from '../components';
import { getShopList } from '../store/recipeSlice';
import { COLORS } from '../styles';

const Shoplist = () => {
    const shoplistItems = useSelector(getShopList);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop list</Text>
            <ShopListInput />
            <Shop shoplistItems={shoplistItems} />
        </View>
    )
}

export default Shoplist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.Color4,
        paddingTop: 30,
    },
    title: {
        fontWeight: '800',
        fontSize: 19,
        color: COLORS.Color1,
        marginBottom: 20,
    },
})
