import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Pressable, Image, SafeAreaView, ScrollView, Dimensions,Constructor} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [field, setField] = useState('');
  const [jobTitle1, setJobTitle1] = useState ('');
  const [startDate1, setStartDate1] = useState ('');
  const [endDate1, setEndDate1] = useState ('');
  const [jobTitle2, setJobTitle2] = useState ('');
  const [startDate2, setStartDate2] = useState ('');
  const [endDate2, setEndDate2] = useState ('');
  const [jobTitle3, setJobTitle3] = useState ('');
  const [startDate3, setStartDate3] = useState ('');
  const [endDate3, setEndDate3] = useState ('');
  const [degree, setDegree] = useState ('');
  const [gradYear, setGradYear] = useState ('');
  const [gpa, setGpa] = useState ('');
  const [schoolName, setSchool] = useState ('');
  const [pNumber, setNum] = useState ('');
  const [skills, setSkills] = useState ('');
  
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    
    {label: 'General', value: 'general'},
    {label: 'Software Engineering', value: 'software'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'Education'},
    
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'General', value: 'general'},
    {label: 'Software Engineering', value: 'software'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'Education'},
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {label: 'General', value: 'general'},
    {label: 'Software Engineering', value: 'software'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'Education'},
  ]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: 'General', value: 'general'},
    {label: 'Software Engineering', value: 'software'},
    {label: 'Finance', value: 'finance'},
    {label: 'Education', value: 'Education'},
  ]);

  const handleSubmit = () => {
    // Handle login form submit
    navigation.navigate('Home')
  }
  
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(
        result.uri,
        result.type, 
        result.name, 
        result.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from picker');
      } else {
        throw err;
      }
    }
  };
  

 
  
    return (
      

      <View style={styles.container}>
        
       
       <Image source={require('../Components/Images/Logo.png')} style={styles.container} />
       <View style={[styles.formContainer, styles.elevation]}>
        <Text style={styles.title}>LOOKING FOR A JOB?</Text>
        <TextInput
            style={styles.input}
            placeholder="First Name, Last Name"
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Email"
            
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={text => setNum(text)}
            value={pNumber}            
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={text => setCity(text)}
            value={city}            
          />
          <TextInput
            style={styles.input}
            placeholder="Field of Work (Optional)"
            onChangeText={text => setField(text)}
            value={field}            
          />
          <TextInput
            style={styles.input}
            placeholder="Job Experience 1"
            value={jobTitle1}   
            onChangeText={(text) => setJobTitle1(text)}          
                
          />
          <DropDownPicker
          placeholder='Select a Field'
          dropDownDirection="TOP"
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
    />
          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Start Year"
                keyboardType="numeric"
                value={startDate1}   
                onChangeText={(text) => setStartDate1(text)}            
              />
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="End Year"
                keyboardType="numeric"
                value={endDate1}   
                onChangeText={(text) => setEndDate1(text)}             
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Job Experience 2"
            value={jobTitle2}   
            onChangeText={(text) => setJobTitle2(text)}          
                
          />

<DropDownPicker
placeholder='Select a Field'
dropDownDirection="TOP"
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
    />
          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Start Year"
                keyboardType="numeric"
                value={startDate2}   
                onChangeText={(text) => setStartDate2(text)}            
              />
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="End Year"
                keyboardType="numeric"
                value={endDate2}   
                onChangeText={(text) => setEndDate2(text)}             
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Job Experience 3"
            value={jobTitle3}   
            onChangeText={(text) => setJobTitle3(text)}          
                
          />
          <DropDownPicker
          placeholder='Select a Field'
          dropDownDirection="TOP"
        open={open3}
        value={value3}
        items={items3}
        setOpen={setOpen3}
        setValue={setValue3}
        setItems={setItems3}
    />

          <View style={styles.row}>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Start Year"
                keyboardType="numeric"
                value={startDate3}   
                onChangeText={(text) => setStartDate3(text)}            
              />
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="End Year"
                keyboardType="numeric"
                value={endDate3}   
                onChangeText={(text) => setEndDate3(text)}             
              />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Degree"
            onChangeText={text => setDegree(text)}
            value={degree}            
          />
          <TextInput
            style={styles.input}
            placeholder="School Name"
            onChangeText={text => setSchool(text)}
            value={schoolName}            
          />
          <DropDownPicker style={styles.dropdown}
          placeholder='Field of Studies'
          dropDownDirection="TOP"
          
        open={open1}
        value={value1}
        items={items1}
        setOpen={setOpen1}
        setValue={setValue1}
        setItems={setItems1}
    />
          <TextInput
            style={styles.input}
            placeholder="GPA"
            onChangeText={text => setGpa(text)}
            value={gpa}   
            keyboardType="decimal-pad"         
          />
          <TextInput
            style={styles.input}
            placeholder="Graduation Year"
            onChangeText={text => setGradYear(text)}
            value={gradYear}   
            keyboardType="numeric"         
          />
          <TextInput
            style={styles.input}
            placeholder="Skills"
            onChangeText={text => setSkills(text)}
            value={skills}            
          />

<Pressable style = {styles.loginBut}  onPress={pickDocument}>
<Text style = {styles.loginTxt}>UPLOAD YOUR CV</Text>
</Pressable>


      
        
  
        </View>
        <Pressable  style={styles.loginBut}>
            <Text style = {styles.loginTxt}>REGISTER</Text>
          </Pressable>
          
        </View>
        
        
      
    );
  };
  
  const styles = StyleSheet.create({
    
    dropdown:{
      marginBottom:5,
    },

    row: {
      flex:1,
      flexDirection: "row",
    },

    inputWrap: {
      flex: 1,
      borderColor: "white",
      margin: 5,
    },
    
    container: {
      flex:1,
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: "white",
      position:'relative',
      bottom:15,
      padding:2,
    },
    contentContainer:{
      alignItems: 'center', 
    justifyContent: 'center',
    padding:20,
    flexGrow:1,
    },

    imgPos:{
      resizeMode: 'contain',
      top:30,
      flex:1,
      alignItems: 'center', 
      justifyContent: 'center',
      },  
  
    title: {
      fontSize: 24,
      marginTop:10,
      marginBottom:20,
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
      paddingBottom: 5,   
      padding: 6,
      borderRadius: 35, 
      backgroundColor: 'white',
      
      marginBottom:30,
      
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



