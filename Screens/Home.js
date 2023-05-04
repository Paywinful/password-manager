import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { useState, useEffect } from 'react';
import Passwordss from './data'



const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState(Passwordss);

  const navigation = useNavigation();
  
  const addItem = () => {
    if (name == '' || website == '' || password == ''){
      alert('Input missing')
      navigation.navigate(
        'Home'
      );
    }
    else{
      const newItem = { name, website, password };
    setPasswords([...passwords, newItem]);
    console.log(passwords)
    navigation.navigate(
      'Passwords', {passwords},
    );

    setName('');
    setWebsite('');
    setPassword('');
    }
  
  };


  return (
    <View style={styles.container}>
      <StatusBar style = 'auto'/>
      <FontAwesome5 name="shield-alt" size={110} color="#e0e0e0" style={styles.shield}/>
      <View style={styles.center}>
        <View style={styles.centercontents}>
          <View style={styles.password}>
            <Text style={styles.nametext}>Name/Username:</Text>
            <TextInput style={styles.passwordinput} value={name} onChangeText= {text => setName(text)} color={'#fff'}/>
          </View>
          <View style={styles.username}>
            <Text style={styles.usernametext}>App/Website:</Text>
            <TextInput style={styles.usernameinput} value={website} onChangeText= {text => setWebsite(text)} color={'#fff'}/>
          </View>
          <View style={styles.password}>
            <Text style={styles.passwordtext}>Password:</Text>
            <TextInput style={styles.passwordinput} value={password} onChangeText= {text => setPassword(text)} color={'#fff'} secureTextEntry={true}/>
          </View>
          <TouchableOpacity onPress={addItem}>
            <View style={styles.button}>
              <Text style={styles.buttontext}>Save</Text>
            </View>
          </TouchableOpacity>
      </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  shield:{
    marginTop: Height * -0.08,
  },
  center: {
    // backgroundColor: '#fff',
    width: Width,
    height: Height * 0.45,
    // justifyContent: 'center',
  },
  centercontents: {
    margin:Width * 0.035,
    marginHorizontal: Width * 0.065
  },
  usernameinput: {
    borderWidth: 1,
    height: Height * 0.055,
    borderRadius: 8,
    borderColor: '#9c9a9b',
    backgroundColor: '#1f1f1f',
    width: Width * 0.87,
  },
  password: {
    marginVertical: Height * 0.02,
  },
  passwordtext: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: Height * 0.01,
  },
  nametext: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: Height * 0.01,
  },
  usernametext: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: Height * 0.01,
  },
  username: {
    marginVertical: Height * 0.02,
  },
  passwordinput: {
    borderWidth: 1,
    height: Height * 0.055,
    borderRadius: 8,
    borderColor: '#9c9a9b',
    backgroundColor: '#1f1f1f',
    width: Width * 0.87,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderColor: 'white',
    borderWidth: 1,
    width: Width * 0.5,
    height: Height * 0.05,
    marginHorizontal: Width * 0.18,
    borderRadius: 10,
    marginVertical: Height * 0.03,
  },
  buttontext:{
    fontSize: 18,
    color: 'white',
  },

});