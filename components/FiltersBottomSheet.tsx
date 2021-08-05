import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';
import { COLORS } from '../styles';

type FiltersBottomSheetProps = {
    display: boolean,
}

const FiltersBottomSheet: React.FC<FiltersBottomSheetProps> = ({
    display
}) => {
    const renderContent = () => (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Filters</Text>
                <View style={styles.topButtons}>
                    <TouchableOpacity>
                        <Text style={styles.button}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>Go!</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    }
})
