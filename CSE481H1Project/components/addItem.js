import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddItem({ submitHandler }) {

    const [text, setText] = useState();

    const styles = StyleSheet.create({
        newItem: {
            fontSize: 20,
        },
    });


    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput style={styles.newItem}
                placeholder="new item..."
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => submitHandler(text)}
                title='add item'
                color='blue'
            />
        </View>
    )

}