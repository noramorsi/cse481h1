// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import AddItem from './components/addItem';

const App = () => {
    const [list, setList] = useState([
        {text: 'coffee', key: 1},
        {text: 'bread', key: 2}
    ]);

    const styles = StyleSheet.create({
        container: {
        },
        content: {
        },
        list: {
        }
    });

    const submitHandler = (itemName) => {
        setList((prevList) => {
            return [
                {text: itemName, key: Math.random().toString()},
                ...prevList];
        })
    };

    return (
        <View style={styles.container}>
            <Text>Grocery List</Text>
            <View style={styles.content}>
                <AddItem submitHandler={ submitHandler } />
                <FlatList style={styles.list}
                    data={list}
                    renderItem={({item}) => <Text>{item.text}</Text>}/>
            </View>
        </View>
    );
};

export default App;