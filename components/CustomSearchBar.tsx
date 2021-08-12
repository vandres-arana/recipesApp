import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../styles';
import { useDispatch } from 'react-redux';
import { loadRecipesFromApi, updateSearch } from '../store/recipeSlice';

const CustomSearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const [searchRecipe, setSearchRecipe] = useState('');

    const updateText = (search: string) => {
        setSearchRecipe(search);
    }

    const submitSearch = () => {
        dispatch(updateSearch({
            id: -1,
            title: searchRecipe
        }))
        dispatch(loadRecipesFromApi(searchRecipe));
    }

    return (
        <View style={styles.searchSection}>

            <AntDesign name="search1" style={styles.searchIcon} size={24} color={COLORS.Color2} />
            <TextInput
                style={styles.input}
                onChangeText={updateText}
                onSubmitEditing={submitSearch}
                value={searchRecipe}
                placeholder="Search recipes..."
                keyboardType="default"
            />
        </View>
    )

}

export default CustomSearchBar

const styles = StyleSheet.create({
    searchSection: {
        width: Dimensions.get('window').width * 0.90,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.White,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: COLORS.White,
        color: COLORS.Grey,
        fontSize: 16,
    },
})
