import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Label from './Label'

type LabelListProps = {
    title: string,
    labels: string[],
}

const LabelList: React.FC<LabelListProps> = ({
    title,
    labels
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.list}>
                {labels.map((label, index) => {
                    return <Label title={label} key={index}/>
                })}
            </View>
        </View>
    )
}

export default LabelList

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        margin: 10,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
})
