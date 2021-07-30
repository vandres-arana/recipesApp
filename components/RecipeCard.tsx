import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type RecipeProps = {
    goToRecipeDetails: () => void
}

const RecipeCard: React.FC<RecipeProps> = ({
    goToRecipeDetails
}) => {
    return (
        <Card containerStyle={styles.card}>
            <Card.Image
                style={styles.image}
                source={{ uri: 'https://www.krumpli.co.uk/wp-content/uploads/2019/12/Lasagna-Bolognese-4.jpg.webp' }}
                onPress={goToRecipeDetails}>
                <View style={styles.imageContainer}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                            <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
                            <Text style={styles.topLabel}>54</Text>
                        </TouchableOpacity>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="fridge-outline" size={24} color="white" />
                            <Text style={styles.topLabel} numberOfLines={3}>6/9</Text>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.plateName}>Lasagne</Text>
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
        shadowColor: '#000000',
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
        color: 'white',
        paddingLeft: 5,
    },
    plateName: {
        color: 'white',
        fontSize: 36,
        fontWeight: '700'
    },
})
