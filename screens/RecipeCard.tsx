import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Dimensions } from 'react-native';

const RecipeCard = () => {
    return (
        <Card containerStyle={styles.card}>
            {/* <Card.Title>Sushi</Card.Title>
            <Card.Divider /> */}
            <Card.Image
                style={styles.image}
                source={{ uri: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-3-1200.jpg' }}>

            </Card.Image>
        </Card>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get('window').height * 0.60,
        width: Dimensions.get('window').width * 0.80,
        borderRadius: 20,
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
