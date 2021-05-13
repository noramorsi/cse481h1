// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import Header from './header';
import Goal from './goal';
import SubmitGoals from './submitGoals';


export default function GoalsScreen() {
    const [list, setList] = useState([
        {title: 'Replace almonds with cashew! blabla', 
        description: 'Some reasonings as why you may want to do that; blablabla',
        link: 'https://google.com',
        foodFrom: 'almonds',
        foodTo: 'cashew',
        tag: '',
        motivationLevel: 1,
        key: 1},
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

    const submitGoalsHandler = () => {
        // todo: watch the tutorial on how to pass data across screens.
    };


    return (
        <View style={styles.container}>
            <Header headerTitle="My Goals" />
            <View style={styles.content}>
                <FlatList style={styles.list}
                    data={list}
                    renderItem={({item}) => (
                    <Goal goal={item}/>)}/>
            </View>
            <SubmitGoals/>
        </View>
    );
};