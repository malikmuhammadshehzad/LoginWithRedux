import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/common/Button';

import {Colors, IMAGES} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const OnBoarding = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={IMAGES.background}
      
      style={styles.MainContainer}>
      <View
        style={styles.container}>
        <Button
          Label={'Login'}
          bgColor={Colors.lightGreen}
          textColor={Colors.black}
          Press={() => navigation.navigate('login')}
        />
        <Button
          Label={'Signup'}
          bgColor={Colors.lightGreen}
          textColor={Colors.black}
          Press={() => navigation.navigate('signup')}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
