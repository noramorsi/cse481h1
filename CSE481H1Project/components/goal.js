import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default function Goal (props) {

    const styles = StyleSheet.create({
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        description: {
          paddingTop: 10,
          fontSize: 15,
        },
        container: {
            padding:20,
            margin:5,
            backgroundColor: 'lightblue',
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
      const [checked, setChecked] = useState(false);

      const GoalText = (props) => {

        return (
          <View>
          <Text style={styles.title}>  {props.goal.title}</Text>
              {
                props.showDescription ?
                <Text style={styles.description}>  {props.goal.description}</Text>
                  : null
              }
            </View>
        );
      }
      const [showDescription, setShowDescription] = useState(false);


    return (
        <View style={styles.container}>          
          <TouchableOpacity onPress={()=>{setChecked(!checked)}}>
            <RadioButton checked={checked}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setShowDescription(!showDescription)}}>
            <GoalText goal={props.goal} showDescription={showDescription}/>
          </TouchableOpacity>
        </View>
    )

}