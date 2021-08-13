import React from 'react'
import { StyleSheet, Text, Platform, TouchableOpacity as TouchableOpacityiOS } from 'react-native'
import { TouchableOpacity as TouchableOpacityAndroid } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { FilterData } from '../models'
import { setAdvancedFilter } from '../store/recipeSlice'
import { COLORS } from '../styles'

type BottomFilterProps = {
    filterbarId: number,
    item: FilterData,
    isSelected: boolean,
}

const BottomFilter: React.FC<BottomFilterProps> = ({
    item,
    isSelected,
    filterbarId
}) => {
    const dispatch = useDispatch()
    const pressFilter = () => {
        dispatch(setAdvancedFilter({
            filterGroup: filterbarId,
            filter: item,
        }))
    }
    return (
        <>
            {
                Platform.OS === 'ios' ?
                    < TouchableOpacityiOS style={[styles.container, { backgroundColor: isSelected ? COLORS.Color2 : COLORS.Color3 }]}
                        onPress={pressFilter} >
                        <Text style={styles.label}>{item.title}</Text>
                    </TouchableOpacityiOS >
                    :
                    < TouchableOpacityAndroid style={[styles.container, { backgroundColor: isSelected ? COLORS.Color2 : COLORS.Color3 }]}
                        onPress={pressFilter} >
                        <Text style={styles.label}>{item.title}</Text>
                    </TouchableOpacityAndroid >
            }
        </>
    )
}

export default BottomFilter

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    label: {
        color: COLORS.White,
    }
})
