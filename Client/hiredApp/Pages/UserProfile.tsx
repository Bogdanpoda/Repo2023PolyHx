import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Pressable, ScrollView} from 'react-native';

interface Props {
    userID: string,

}

export default function LoginPage(props: Props) {

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
            <View>
                <Text>
                    Name
                </Text> 
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
                </View>
                <Text>
                    Email
                </Text> 
                <View style={styles.input_container}>
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
                </View>
                <Text>
                    Degree
                </Text> 
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Degree"
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
                </View>
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
            <View>
                {/* <Button title="submit" onPress={submitEdit}/> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: '30%',
        flex: 1,
        alignItems: 'center',
        marginLeft: '20%',
        marginRight: '30%%',
        height: '10%',
    },
    input_container: {
        display: 'flex',
        flexDirection: 'row',
        height: '12%',
        marginBottom: '16%'
    },
    edit_button: {
        backgroundColor: '#9CBA7F',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'6%',
        borderRadius: 15,
        width: '20%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      width: '100%',
    },

    infoText: {
        display: 'flex',
        zIndex: -100,
      }});