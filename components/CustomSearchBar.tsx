import React, { Component } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

type SearchBarProps = {
    onChangeText: (search: string) => void
}

type SearchBarState = {
    search: string;
}

export default class CustomSearchBar extends Component<SearchBarProps, SearchBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            search: '',
        };
    }

    render() {
        const { search } = this.state;
        const { onChangeText } = this.props;

        const onUpdateText = (search: string) => {
            this.setState({ search })
            onChangeText(search)
        }

        return (
            <View style={styles.searchSection}>
                <AntDesign name="search1" style={styles.searchIcon} size={24} color="black" />
                <TextInput
                    style={styles.input}
                    onChangeText={onUpdateText}
                    value={search}
                    placeholder="Search recipes..."
                    keyboardType="default"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchSection: {
        width: Dimensions.get('window').width * 0.80,
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: 'white',
        color: '#424242',
        fontSize: 16,
    },
})
