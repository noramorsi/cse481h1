// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import AddItem from './addItem';
import Header from './header';
import Item from './item';

export default function GroceryListScreen () {
    const [list, setList] = useState([
        {text: 'coffee', key: 1},
        {text: 'bread', key: 2},
        {text: 'milk', key: 3},
        {text: 'eggs', key: 4},
        {text: 'cake', key: 5},
        {text: 'bananas', key: 6},
        {text: 'rice', key: 7},
        {text: 'cheese', key: 8},
        {text: 'watermelon', key: 9},
    ]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        content: {
            flex: 1,
            padding: 20,
            backgroundColor: '#fff',
        },
        list: {
            flex: 1,
            marginTop: 20,
        }
    });

    const submitHandler = (itemName) => {
        setList((prevList) => {
            return [
                {text: itemName, key: Math.random().toString()},
                ...prevList];
        })
    };

    const deleteHandler = (itemKey) => {
        setList((prevList) => {
            return prevList.filter(current => current.key != itemKey);
        });
    }

    return (
        <View style={styles.container}>
            <Header headerTitle="My Grocery List" />
            <View style={styles.content}>
                <AddItem submitHandler={ submitHandler } />
                <FlatList style={styles.list}
                    data={list}
                    renderItem={({item}) => (
                    <Item item={item} deleteHandler={ deleteHandler }/>)}/>
            </View>
        </View>
    );
};