import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { LABELS } from '../static'
import { COLORS } from '../styles'
import YoutubePlayer from "react-native-youtube-iframe";

type RecipeVideoProps = {
    url: string,
}

const RecipeVideo: React.FC<RecipeVideoProps> = ({
    url
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{LABELS.TUTORIAL}</Text>
            <YoutubePlayer
                height={300}
                play={true}
                videoId={"B6sxE9HAdkQ"}
            />
        </View>
    )
}

export default RecipeVideo

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.Color2,
        marginBottom: 10,
    },
})
