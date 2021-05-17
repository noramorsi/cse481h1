import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function SubmitGroceryList({ submitHandler }) {

    const styles = StyleSheet.create({

    });

    return (
        <View>
            <Button
                onPress={() => {submitHandler()}}
                title='Look at Goals!'
                color='#28965A'
            />
        </View>
    )

}