import React from 'react'
import { StyleSheet, ScrollView, Dimensions, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { COLORS } from '../styles';
import { RecipeDetailsCard, RecipeInfo, RecipeVideo } from '../components';
import LabelList from '../components/LabelList';
import { LABELS } from '../static';
import Ingredients from '../components/Ingredients';
import NutritionInformation from '../components/NutritionInformation';

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
            <RecipeDetailsCard recipe={recipe} returnToPreviousScreen={returnToRecipes} />
            <RecipeInfo totalTime={recipe.time} calories={recipe.calories} />
            <LabelList title={LABELS.DIET} labels={recipe.dietLabels} />
            <LabelList title={LABELS.HEALTH} labels={recipe.healthLabels} />
            <LabelList title={LABELS.CAUTION} labels={recipe.cautionLabels} />
            <Ingredients ingredients={recipe.ingredients} />
            <RecipeVideo url={'q45dMSP8qf0'}/>
            <NutritionInformation digests={recipe.nutritionInformation}/>
        </ScrollView>
    )
}

export default RecipeDetail

const styles = StyleSheet.create({
    container: {
    },
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
