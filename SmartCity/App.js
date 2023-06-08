import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/signin';
import { useState } from 'react';
import StartRide from './components/startRide';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <SignIn setIsLoggedIn={setIsLoggedIn}></SignIn>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <StartRide></StartRide>
        <StatusBar style="auto" />
      </View>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
