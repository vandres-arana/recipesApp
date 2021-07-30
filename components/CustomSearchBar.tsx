import React, { Component } from 'react'
import { Dimensions, StyleSheet, TextInput } from 'react-native'

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
            <TextInput
                style={styles.searchBar}
                onChangeText={onUpdateText}
                value={search}
                placeholder="Search recipes..."
                keyboardType="default"
            />
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        width: Dimensions.get('window').width * 0.90,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    input: {

    },
})
