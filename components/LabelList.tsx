import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../styles'
import Label from './Label'
import { AntDesign } from '@expo/vector-icons';

type LabelListProps = {
    title: string,
    labels: string[],
}

const LabelList: React.FC<LabelListProps> = ({
    title,
    labels,
}) => {
    const [isFullListDisplayed, setIsFullListDisplayed] = useState(false);
    const displayFullList = () => {
        setIsFullListDisplayed(!isFullListDisplayed)
    }
    var labelList = labels.slice(0, 3)
    if (isFullListDisplayed) {
        labelList = labels;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.list}>
                {labelList.map((label, index) => {
                    return <Label title={label} key={index} />
                })}
                <TouchableOpacity style={styles.labelContainer} onPress={displayFullList}>
                    {isFullListDisplayed ?
                        <AntDesign name="caretup" size={16} color={COLORS.White} />
                        :
                        <AntDesign name="caretdown" size={16} color={COLORS.White} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LabelList

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    title: {
        marginHorizontal: 10,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    labelContainer: {
        margin: 10,
        height: 30,
        paddingHorizontal: 10,
        backgroundColor: COLORS.Color3,
        borderRadius: 5,
        justifyContent: 'center'
    },
    label: {
        color: COLORS.White,
        fontSize: 16,
    },
})
