import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS } from '../styles';

type CircularProgressProps = {
    title: string,
    percentage: number,
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    title,
    percentage,
}) => {
    return (
        <View style={styles.container}>
            <AnimatedCircularProgress
                size={100}
                width={10}
                fill={percentage}
                tintColor={percentage < 100 ? COLORS.Color2 : percentage < 200 ? COLORS.Yellow : COLORS.Red}
                backgroundColor={COLORS.Color4}
                rotation={0}>
                {
                    (fill) => (
                        <View style={styles.innerContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.label}>{percentage.toFixed(0)}%</Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        </View>
    )
}

export default CircularProgress

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.Color2,
        fontSize: 12,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.Black,
    },
})
