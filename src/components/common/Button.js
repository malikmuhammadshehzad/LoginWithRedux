import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
 
const Button = ({bgColor, Label, textColor, Press}) => {
  return (
      <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 40,
        alignItems: 'center',
        width: 200,
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {Label}
      </Text>
    </TouchableOpacity>
  )
}

export default Button