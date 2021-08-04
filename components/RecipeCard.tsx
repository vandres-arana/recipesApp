import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Recipe } from '../models';
import { COLORS } from '../styles';

type RecipeProps = {
    goToRecipeDetails: (recipe: Recipe) => void,
    item: Recipe
}

const RecipeCard: React.FC<RecipeProps> = ({
    goToRecipeDetails,
    item
}) => {
    return (
        <Card containerStyle={styles.card}>
            <Card.Image
                style={styles.image}
                source={{ uri: item.image }}
                onPress={() => goToRecipeDetails(item)}>
                <View style={styles.imageContainer}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <MaterialCommunityIcons name="heart-outline" size={30} color={COLORS.White} />
                            <Text style={styles.topLabel}>{item.likes}</Text>
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="fridge-outline" size={30} color={COLORS.White}  />
                            <Text style={styles.topLabel} numberOfLines={3}>6/9</Text>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.plateName}>{item.title}</Text>
                    </View>
                </View>
            </Card.Image>
        </Card>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.80,
        borderRadius: 10,
        padding: 0,
        shadowColor: COLORS.Black,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        borderRadius: 10,
        height: Dimensions.get('window').height * 0.60,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    topLabel: {
        color: COLORS.White,
        paddingLeft: 5,
        fontWeight: '700',
    },
    plateName: {
        color: COLORS.White,
        fontSize: 36,
        fontWeight: '700'
    },
})
