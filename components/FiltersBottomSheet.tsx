import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import { CUISINEFILTERS, DIETFILTERS, DISHFILTERS, HEALTHFILTERS, MEALFILTERS } from '../static';
import { RootState } from '../store';
import { displayBottomSheet } from '../store/recipeSlice';
import { COLORS } from '../styles';
import BottomFilterBar from './BottomFilterBar';

const FiltersBottomSheet: React.FC = () => {
    const dispatch = useDispatch()
    const display = useSelector((state: RootState) => state.recipes.displayBottomSheet)

    const resetFilters = () => {
        
    }

    const closeModal = () => {
        dispatch(displayBottomSheet(false))
    }

    const applyFilters = () => {
        if (sheetRef.current != null) {
            sheetRef.current.snapTo(0);
        }
        // filterRecipes([dietSelectedFilter, healthSelectedFilter, cuisineSelectedFilter, mealSelectedFilter, dishSlectedFilter])
    }

    const renderContent = () => (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Filters</Text>
                <View style={styles.topButtons}>
                    <TouchableOpacity onPress={resetFilters}>
                        <Text style={styles.button}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={applyFilters}>
                        <Text style={styles.button}>Go!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.filterContainer}>
                    <Text style={styles.subtitle}>Diet type</Text>
                    <BottomFilterBar barId={0} filters={DIETFILTERS} />
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.subtitle}>Health</Text>
                    <BottomFilterBar barId={1} filters={HEALTHFILTERS} />
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.subtitle}>Cuisine Type</Text>
                    <BottomFilterBar barId={2} filters={CUISINEFILTERS} />
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.subtitle}>Meal Type</Text>
                    <BottomFilterBar barId={3} filters={MEALFILTERS} />
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.subtitle}>Dish Type</Text>
                    <BottomFilterBar barId={4} filters={DISHFILTERS} />
                </View>
            </ScrollView>
        </View>
    );

    const sheetRef = React.useRef<BottomSheet>(null);

    const displayFiltersSheet = () => {
        if (sheetRef.current != null) {
            sheetRef.current.snapTo(1);
        }
    }

    if (display) {
        displayFiltersSheet()
    }

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[0, Dimensions.get('window').height * 0.75]}
            borderRadius={10}
            renderContent={renderContent}
            onCloseEnd={closeModal}
        />
    )
}

export default FiltersBottomSheet

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.White,
        height: Dimensions.get('window').height * 0.75,
        justifyContent: 'space-between',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.Color1,
        padding: 20,
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.30,
    },
    title: {
        color: COLORS.Color4,
        fontWeight: '700',
        fontSize: 16,
    },
    button: {
        color: COLORS.Color3,
        fontWeight: '800',
        fontSize: 16,
    },
    subtitle: {
        color: COLORS.Color2,
        fontWeight: '700',
        fontSize: 16,
        paddingBottom: 10,
    },
    filterContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
})
