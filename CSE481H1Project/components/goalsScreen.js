// https://www.youtube.com/watch?v=uLHFPt9B2Os

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, FlatList, View, TextInput } from 'react-native';
import Header from './header';
import Goal from './goal';
import SubmitGoals from './submitGoals';

export default function GoalsScreen({ route, navigation }) {
    const [recs, setRecs] = useState([
        {title: 'Replace almonds with cashew! blabla', 
        description: 'Some reasonings as why you may want to do that; blablabla',
        link: 'https://google.com',
        foodFrom: 'almonds',
        foodTo: 'cashew',
        tag: '',
        motivationLevel: 1,
        key: 1},
        {title: 'Goal2', 
        description: 'Some reasonings as why you may want to do that; blablabla',
        link: 'https://google.com',
        foodFrom: 'almonds',
        foodTo: 'cashew',
        tag: '',
        motivationLevel: 1,
        key: 2},
        {title: 'Goal3', 
        description: 'Some reasonings as why you may want to do that; blablabla',
        link: 'https://google.com',
        foodFrom: 'almonds',
        foodTo: 'cashew',
        tag: '',
        motivationLevel: 1,
        key: 3},
    ]);

    const[selected, setSelected] = useState ([
        {key: -1}
    ])

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

    const selectGoalHandler = (goalKey) => {
        setSelected((prevSelected) => {
            return [
                {key: goalKey,},
                ...prevSelected];
        });
    };

    const unselectGoalHandler = (goalKey) => {
        setSelected((prevSelected) => {
            return prevSelected.filter(current => current.key != goalKey);
        });
    };

    const submitGoalsHandler = () => {
            let selectedKeys = selected.map(a => a.key);
            let selectedGoals = recs.filter(current => (selectedKeys.includes(current.key)));
            navigation.navigate("Grocery List", selectedGoals);
    };

    return (
        <View style={styles.container}>
            <Header headerTitle="My Goals" />
            <View style={styles.content}>
                <FlatList style={styles.list}
                    data={recs}
                    renderItem={({item}) => (
                    <Goal goal={item} selectHandler={ selectGoalHandler } unselectHandler={ unselectGoalHandler }/>)}/>
            </View>
            <SubmitGoals submitHandler={ submitGoalsHandler }/>
            <View> 
            {(() => {
              // TODO: do something with data passed here!
              if (typeof route.params == 'undefined'){
                  return (
                      <Text>For testing purposes only :))</Text>
                  )
              }
              return <Text> { JSON.stringify(route.params) }</Text>;
            })()}
            </View>
        </View>
    );
};