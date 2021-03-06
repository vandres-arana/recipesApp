import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Dimensions
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../styles';
import { Recipe } from '../models';
import { markAsFavorite } from '../store/recipeSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

type RecipeDetailsCardProps = {
    recipe: Recipe,
    returnToPreviousScreen: () => void,
}

const RecipeDetailsCard: React.FC<RecipeDetailsCardProps> = ({
    recipe,
    returnToPreviousScreen,
}) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);
    const markRecipeAsFavorite = () => {
        setIsFavorite(!isFavorite);
        dispatch(markAsFavorite(recipe))
    }
    return (
        <ImageBackground source={{ uri: recipe.image }}
            style={styles.image}>
            <View style={styles.imageContainer}>
                <View style={styles.topContainer}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => returnToPreviousScreen()}>
                        <AntDesign name="left" size={30} color={COLORS.White} />
                    </TouchableOpacity>
                    <View style={styles.topRightContainer}>
                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={markRecipeAsFavorite}>
                            <MaterialCommunityIcons name={isFavorite ? "heart" : "heart-outline"} size={30} color={COLORS.White} />
                            <Text style={styles.topLabel}>{recipe.likes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <AntDesign name="sharealt" size={30} color={COLORS.White} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                            <MaterialCommunityIcons name="eye-off-outline" size={30} color={COLORS.White} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="fridge-outline" size={30} color={COLORS.White} />
                        <Text style={styles.topLabel} numberOfLines={3}>6/9</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default RecipeDetailsCard

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.40,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    topRightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLabel: {
        color: COLORS.White,
        fontSize: 14,
    },
    icon: {
        paddingHorizontal: 20,
    },
    recipeTitle: {
        color: COLORS.White,
        fontSize: 36,
        fontWeight: '700',
        width: '80%',
    },
})
