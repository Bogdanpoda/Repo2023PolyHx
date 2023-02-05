import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import {
  NavigationContainer
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from './Components/NavBar';

const Stack = createNativeStackNavigator();


export default function App() {

  const LoginScreen = ({ navigation }: { navigation: any }) => {
    return <LoginPage navigation={navigation}></LoginPage>;
  };

  const HomeScreen = () => {
    return <HomePage></HomePage>;
  };

  



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
