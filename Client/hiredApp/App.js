import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import SignUp from './Pages/SignUp';

export default function App() {
  return (
    <LoginPage></LoginPage>
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
