import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddItem({ submitHandler }) {

    const [text, setText] = useState();

    const styles = StyleSheet.create({
        newItem: {
            fontSize: 20,
        },
    });

    return (
        <View>
            <TextInput style={styles.newItem}
                placeholder="new item..."
                onChangeText={text => setText(text.trim())}            />
            <Button
                onPress={() => {
                    if (text != "") {
                        submitHandler(text);                        
                    }
                }}
                title='add item'
                color='blue'
            />
        </View>
    )

}