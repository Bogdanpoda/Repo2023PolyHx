import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Pressable, ScrollView, Image} from 'react-native';

interface Props {
    userID: string,

}

export default function UserProfile(props: Props) {

    const [isNameEditable, setIsNameEditable] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');


    // const fetchUserData() {

    // }

    // const submitEdit() {

    // }

    
    return (
        
        <View style={styles.container}>
           <Image source={require('../Components/Images/Profile.png')} style={styles.img} />
           

           <ScrollView style={{width:'100%'}}>
            
                
                <View style = {styles.formContainer}>

                    <Text>Name</Text>

                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>
                    
                
                    <Text>Email</Text> 

                    
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>
                    


                    <Text>
                        Phone Number
                    </Text> 
                   
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>
                        <Text>
                        City
                    </Text> 
                   
                        <TextInput
                            style={styles.input}
                            placeholder="City"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>

                        <Text>
                        Job Experience 1
                    </Text> 
                   
                        <TextInput
                            style={styles.input}
                            placeholder="Job Experience 1"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>

                        <Text>
                        Field of Work
                    </Text> 
                   
                        <TextInput
                            style={styles.input}
                            placeholder="Field of Work"
                            onChangeText={text => setName(text)}
                            value={name}
                            editable = {isNameEditable}
                        />
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>
                   
                  

                    
                    <Text>
                        Description
                    </Text> 
                    <View style={styles.input_container}>
                        <ScrollView>
                            <TextInput
                                placeholder="Description"
                                onChangeText={text => setName(text)}
                                value={name}
                                editable = {isNameEditable}
                            />
                        </ScrollView>
                        <Pressable
                            style={styles.edit_button}
                            onPress={() => setIsNameEditable(!isNameEditable)}
                        >
                            <Text style={styles.infoText}>EDIT</Text>
                        </Pressable>
                    </View>
                    </View>
                
                </View>
            
            <View>
                {/* <Button title="submit" onPress={submitEdit}/> */}
            </View>
            </ScrollView>
        </View>
        
    );
}


const styles = StyleSheet.create({
    
    container: {        
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
        
        
    },

    img:{ 
        width: 150, 
        height: 150, 
        borderRadius: 400/ 2,
        flexGrow:1,
        top:20,
        marginBottom:50,
        alignItems: 'center',
        justifyContent:'center'
        
    },

    formContainer: {
        width: '100%', 
        marginRight:15,       
        position:'relative',
        padding: 6,
        borderRadius: 45, 
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',    
        
      },

    input_container: {
        width: '90%',        
        position:'relative',
        paddingBottom:60, 
        padding: 6,
        borderRadius: 45, 
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center', 
        marginBottom:50,
        flex:1,
    },
    edit_button: {
        backgroundColor: '#9CBA7F',
        justifyContent:'center',
        alignItems:'center',
        marginTop:7,
        marginBottom:20,
        borderRadius: 15,
        padding:5,
        width: '25%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 5,
      width: '100%',
      flex:1,
      borderRadius:8,
    },

    infoText: {
        display: 'flex',
        zIndex: -100,
      }});