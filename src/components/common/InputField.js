import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';
import { Colors } from '../../assets';

const  InputField = props => {
  return (
    <TextInput
   
      {...props}
      style={{
        borderRadius:17,
        color:Colors.black,
        paddingHorizontal: 10,
        width:350,
        backgroundColor:Colors.lightGrey,
        marginVertical: 10,
      }}
      ></TextInput>
  );
};

export default InputField;
