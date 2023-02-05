import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Pressable, Image} from 'react-native';



export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle login form submit
    navigation.navigate('Home')

  }

  const handleRegister = () => {
    // Handle login form submit
    navigation.navigate('SignUp')

  }

  return (
    
    <View style={styles.container}>
      <Image source={require('../Components/Images/Logo.png')} style={styles.imgPos} />
      <View style={[styles.formContainer, styles.elevation]}>
      <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        
      </View>
      <Pressable onPress={handleSubmit} style={styles.loginBut}>
          <Text style = {styles.loginTxt}>LOGIN</Text>
        </Pressable>
        <Pressable onPress={handleRegister} style={styles.loginBut}>
          <Text style = {styles.loginTxt}>REGISTER EMPLOYEE</Text>
        </Pressable>
        <Pressable onPress={handleRegister} style={styles.loginBut}>
          <Text style = {styles.loginTxt}>REGISTER COMPANY</Text>
        </Pressable>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    position:'relative',
    bottom:15,
  },

  imgPos:{
    resizeMode: 'contain',
    top:30,
    flex:1,
    },  

  title: {
    fontSize: 24,
    marginTop:10,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    fontVariant:['small-caps'],
    position:'relative',
   
    resizeMode: 'contain',
  },

  formContainer: {
    width: '90%',        
    position:'relative',
    paddingBottom: 70,   
    padding: 6,
    borderRadius: 45, 
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center', 
    marginBottom:50,
    
  },

  elevation: {  
    shadowColor: 'black',      
    elevation: 10,  
  }, 
  
  loginBut: {
    backgroundColor: '#FF871C',
    padding: 10,
    marginBottom:15,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius:35,
    position:'relative',
        
  },

  loginTxt: {
    textAlign:"center",
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
    textDecorationColor: 'white',
    fontVariant:['small-caps'],
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    width: '100%',
    
    resizeMode: 'contain',
  }});