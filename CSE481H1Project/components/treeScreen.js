// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import AddItem from './addItem';
import Header from './header';
import Item from './item';

export default function TreeScreen() {
    const [list, setList] = useState([
        {text: 'coffee', key: 1},
        {text: 'bread', key: 2},
        {text: 'milk', key: 3}
    ]);

    const styles = StyleSheet.create({
        container: {
        },
        content: {
          padding: 40,
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

    const deleteHandler = (itemKey) => {
        setList((prevList) => {
            return prevList.filter(current => current.key != itemKey);
        });
    }

    return (
        <View style={styles.container}>
            <Header headerTitle="Tree" />
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