import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Digest } from '../models'
import { LABELS } from '../static'
import { COLORS } from '../styles'
import CircularProgress from './CircularProgress'

type NutritionInformationProps = {
    digests: Digest[],
}

const NutritionInformation: React.FC<NutritionInformationProps> = ({
    digests,
}) => {
    const renderItem = (props: any) => {
        return <CircularProgress title={props.item.label} percentage={props.item.total}/>
    }

    const keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{LABELS.DIGEST}</Text>
            <FlatList
                horizontal={true}
                data={digests}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
                style={styles.list}
            />
        </View>
    )
}

export default NutritionInformation

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        height: 150,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        color: COLORS.Color2,
        fontSize: 16,
        fontWeight: '700',
    },
    list: {
        paddingVertical: 10,
    }
})
