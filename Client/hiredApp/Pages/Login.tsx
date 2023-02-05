import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Pressable} from 'react-native';



export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle login form submit
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
     <Text style={styles.title}>
      HIRED  OR  FIRED </Text>
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
        <Pressable onPress={handleSubmit} style={styles.loginBut}>
          <Text style = {styles.loginTxt}>LOGIN</Text>
        </Pressable>
      </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
   position:'relative',
   bottom:20,
  },

  

  title: {
    fontSize: 24,
    paddingBottom:40,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight:'bold',
    fontVariant:['small-caps'],
  },

  formContainer: {
    width: '90%',        
    paddingTop: 10,
    paddingBottom: 270,
    padding: 10,
    borderRadius: 45, 
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center', 
    position:'relative',
    top:100,
    bottom:10,
    
  },

  elevation: {  
    shadowColor: 'black',      
    elevation: 10,  
  }, 
  
  loginBut: {
    backgroundColor: '#FF871C',
    padding: 10,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius:35,
    position:'relative',
    
    bottom:10,
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
    marginBottom: 16,
    width: '100%'
  }});