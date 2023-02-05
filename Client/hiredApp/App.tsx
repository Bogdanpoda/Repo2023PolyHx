import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from './Components/NavBar';
import SignUp from './Pages/SignUpEmployee';

const Stack = createNativeStackNavigator();


export default function App() {

  const LoginScreen = ({ navigation }: { navigation: any }) => {
    return <LoginPage navigation={navigation}></LoginPage>;
  };

  const HomeScreen = () => {
    return <HomePage></HomePage>;
  };

  const SignUpScreen =()=>{

    return<SignUp></SignUp>
  }

  



  return (

<NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerStyle: { backgroundColor: "#9CBA7F" }, }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "welcome" }}
      />

      <Stack.Screen
      name="Home"
      component={NavBar}
      options={{ title: "Home" }}/>

  <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: "SignUp" }}/>

      
          
    </Stack.Navigator>
  </NavigationContainer>



    




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
