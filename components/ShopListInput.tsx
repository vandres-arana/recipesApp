import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../styles';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../store/recipeSlice';

const ShopListInput: React.FC = () => {
    const [ingredientName, setIngredientName] = useState('');
    const dispatch = useDispatch()

    const updateText = (ingredientName: string) => {
        setIngredientName(ingredientName);
    }

    const createIngredient = () => {
        dispatch(addIngredient(ingredientName))
        setIngredientName('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type a new item to shop"
                placeholderTextColor="#f2f2f2"
                clearButtonMode={"while-editing"}
                onChangeText={updateText}
                value={ingredientName}
            />
            <TouchableOpacity onPress={createIngredient}>
                <AntDesign name="pluscircleo" size={30} color={COLORS.White} />
            </TouchableOpacity>
        </View>
    )
}

export default ShopListInput

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get("window").width * 0.95,
        backgroundColor: COLORS.Color3,
        borderRadius: 5,
        marginBottom: 10,
    },
    input: {
        color: COLORS.White,
        backgroundColor: COLORS.Color2,
        borderRadius: 4,
        padding: 8,
        width: Dimensions.get("window").width * 0.8,
    },
})
