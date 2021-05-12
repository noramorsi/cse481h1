import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default function Item (props) {

    const styles = StyleSheet.create({
        item: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        container: {
            padding:20,
            margin:5,
            backgroundColor: 'coral',
            flexDirection: 'row',
        }
    });

    // https://stackoverflow.com/questions/31889921/how-to-implement-radio-button-in-react-native
    const RadioButton = (props) => {

        return (
            <View style={[{
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }, props.style]}>
              {
                props.checked ?
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: 'white',
                  }}/>
                  : null
              }
            </View>
        );
      }

    let swipeoutBtns = [
        {
          text: 'Delete',
          backgroundColor: 'red',
          onPress: () => { props.deleteHandler(props.item.key) },
        }
      ]

      const [checked, setChecked] = useState(false);

    return (

      <Swipeout right={swipeoutBtns}>
        <View style={styles.container}>          
          <TouchableOpacity onPress={()=>{setChecked(true)}}>
            <RadioButton checked={checked}/>
          </TouchableOpacity>
          <Text style={styles.item}>  {props.item.text}</Text>
        </View>
      </Swipeout>

    )

}