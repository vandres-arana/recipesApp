import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet';

type FiltersBottomSheetProps = {
    display: boolean,
}

const FiltersBottomSheet: React.FC<FiltersBottomSheetProps> = ({
    display
}) => {
    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 16,
                height: Dimensions.get('window').height * 0.75,
            }}
        >
            <Text>Swipe down to close</Text>
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

const styles = StyleSheet.create({})
