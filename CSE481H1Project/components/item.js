import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

export default function Item (props) {

    const styles = StyleSheet.create({
        item: {
            fontSize: 20,

        },
        container: {
            margin: 10,
            backgroundColor: 'coral',
            flexDirection: 'row',
        }
    });


    const RadioButton = (props) => {
        return (
            <View style={[{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }, props.style]}>
              {
                props.selected ?
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                  }}/>
                  : null
              }
            </View>
        );
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <RadioButton/>
            </TouchableOpacity>
            <Text style={styles.item}>{props.item.text}</Text>
        </View>
    )

}