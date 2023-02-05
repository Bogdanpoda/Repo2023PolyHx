import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import SignUp from './Pages/SignUpEmployee';

export default function App() {
  return (
    <ScrollView style={{width:'100%'}}>
    <SignUp></SignUp>
    </ScrollView>
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
