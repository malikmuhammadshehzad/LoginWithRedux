import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';

import {Colors, IMAGES} from '../../assets';
import {Button, InputField} from '../../components';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../Redux/Reducers/AuthReducer';

const Login = () => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userData, isLoading} = useSelector(state => state.Auth);

  const LoginFunction = () => {
    const obj = {
      username: userName,
      password: password,
    };
    dispatch(loginUser(obj));
  };

  return (
    <ImageBackground source={IMAGES.screenImage} style={styles.bgImage}>
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.HText}>Login to your account</Text>
        </View>
        <InputField
          value={userName}
          placeholder="Email / Username"
          keyboardType={'email-address'}
          onChangeText={text => setName(text)}
        />

        <InputField
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button
            textColor={Colors.black}
            bgColor={Colors.lightGreen}
            Label="Login"
            Press={LoginFunction}
          />
        )}

        <View style={styles.linkContainer}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.white}}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.linkText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
