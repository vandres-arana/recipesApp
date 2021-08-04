import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../styles';

type RecipeDetailsProps = {
    route: any,
    navigation: StackNavigationProp<any>,
}

const RecipeDetail: React.FC<RecipeDetailsProps> = ({
    route,
    navigation,
}) => {
    const { recipe } = route.params;
    const returnToRecipes = () => {
        navigation.pop()
    }
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: recipe.image }}
                style={styles.image}>
                <View style={styles.imageContainer}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={returnToRecipes}>
                            <AntDesign name="left" size={30} color={COLORS.White} />
                        </TouchableOpacity>
                        <View style={styles.topRightContainer}>
                            <TouchableOpacity style={styles.iconContainer}>
                                <MaterialCommunityIcons name="heart-outline" size={30} color={COLORS.White} />
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
        </ScrollView>
    )
}

export default RecipeDetail

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: '100%',
        height: 300
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
