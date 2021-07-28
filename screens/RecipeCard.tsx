import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Dimensions } from 'react-native';

const RecipeCard = () => {
    return (
        <Card containerStyle={styles.card}>
            <Card.Image
                style={styles.image}
                source={{ uri: 'https://www.krumpli.co.uk/wp-content/uploads/2019/12/Lasagna-Bolognese-4.jpg.webp' }}>
            </Card.Image>
            <Card.Divider />
            <Card.FeaturedTitle style={styles.plateName}>Lasagne</Card.FeaturedTitle>
            <Card.FeaturedSubtitle style={styles.plateName}>60 min</Card.FeaturedSubtitle>
        </Card>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get('window').width * 0.80,
        borderRadius: 10,
        padding: 0,
    },
    image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: Dimensions.get('window').height * 0.60,
        marginBottom: 10,
    },
    plateName: {
        color: 'black'
    },
})
