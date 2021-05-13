// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import Header from './header';
import Goal from './goal';

export default function GoalsScreen() {
    const [list, setList] = useState([
        {title: 'my goal1', description: 'blablablabla', key: 1},
        {title: 'my goal2', description: 'blablablabla', key: 2},
        {title: 'my goal3', description: 'blablablabla', key: 3},
        {title: 'my goal4', description: 'blablablabla', key: 4},
        {title: 'my goal5', description: 'blablablabla', key: 5},
        {title: 'my goal6', description: 'blablablabla', key: 6},
        {title: 'my goal7', description: 'blablablabla', key: 7},
        {title: 'my goal8', description: 'blablablabla', key: 8},
    ]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        content: {
            flex: 1,
            padding: 20,
        },
        list: {
            flex: 1,
            marginTop: 20,
        }
    });

    return (
        <View style={styles.container}>
            <Header headerTitle="My Goals" />
            <View style={styles.content}>
                <FlatList style={styles.list}
                    data={list}
                    renderItem={({item}) => (
                    <Goal goal={item}/>)}/>
            </View>
        </View>
    );
};