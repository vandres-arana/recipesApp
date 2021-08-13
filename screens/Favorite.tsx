import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FavoriteRecipes } from '../components'
import { COLORS } from '../styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { Recipe } from '../models';
import routes from '../navigation/routes';

type FavoriteProps = {
    navigation: StackNavigationProp<any>,
}

const Favorite: React.FC<FavoriteProps> = ({
    navigation,
}) => {
    const goToRecipeDetails = (recipe: Recipe) => {
        navigation.push(routes.HOME.DETAIL, { recipe: recipe })
    }

    return (
        <View style={styles.container}>
            <FavoriteRecipes goToRecipeDetails={goToRecipeDetails}/>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.Color4,
    }
})
