import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { Dimensions } from 'react-native';

const RecipeCard = () => {
    return (
        <Card containerStyle={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: 'https://www.krumpli.co.uk/wp-content/uploads/2019/12/Lasagna-Bolognese-4.jpg.webp' }}>
            </Image>
        </Card>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').height * 0.60,
        width: Dimensions.get('window').width * 0.80,
        borderRadius: 20,
        padding: 0,
        borderColor: '#FFFFFF',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    },
})
