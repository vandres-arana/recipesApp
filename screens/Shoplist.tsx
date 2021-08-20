import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, } from 'react-native'
import { Shop, ShopListInput } from '../components';
import { SHOPLISTITEMS } from '../static';
import { COLORS } from '../styles';

const Shoplist = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shoplist</Text>
            <ShopListInput />
            <Shop shoplistItems={SHOPLISTITEMS} />
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
    },
    title: {
        fontWeight: '800',
        fontSize: 19,
        color: COLORS.Color1,
        marginVertical: 20,
    },
})
