import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import {Colors, IMAGES} from '../../assets';
import {Button, InputField} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={IMAGES.screenImage} style={{ position:'absolute', height:'100%' , width:'100%'}} >
  
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Create Account</Text>
 
     <InputField placeholder=" Enter your Email" />
      <InputField
        placeholder=" Enter your Email"
        keyboardType={'email-address'}
      />
      <InputField placeholder="Password" secureTextEntry={true} />
      <View style={styles.btnContainer} >
  
      <Button
        textColor={Colors.black}
        bgColor={Colors.lightGreen}
        Label="Signup"
        Press={() => alert('Logged In')}
      />
       </View>
    </View>
    </ImageBackground>
  );
};

export default Signup;
