import React, { Component } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

type SearchBarProps = {
    changeText: (search: string) => void
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

        const updateText = (search: string) => {
            this.setState({ search });
        }

        const submitSearch = () => {
            const { changeText } = this.props;
            changeText(search)
            this.setState({ search: '' })
        }

        return (
            <View style={styles.searchSection}>
                <AntDesign name="search1" style={styles.searchIcon} size={24} color="black" />
                <TextInput
                    style={styles.input}
                    onChangeText={updateText}
                    onSubmitEditing={submitSearch}
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
