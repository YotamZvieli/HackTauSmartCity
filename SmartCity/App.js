import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/signin';
import { useState } from 'react';
import StartRide from './components/startRide';
import AuthenticationScreen from './components/AuthenticationScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  if (isLoggedIn == 0) {
    return (
      <View style={styles.container}>
        <SignIn setIsLoggedIn={setIsLoggedIn}></SignIn>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    if(isLoggedIn == 1){
    return (
      <View style={styles.container}>
       <StartRide setIsLoggedIn={setIsLoggedIn}></StartRide>
        <StatusBar style="auto" />
      </View>
    );
    }
    else{
      return(
        <View style={styles.container}>
        <AuthenticationScreen></AuthenticationScreen>
         <StatusBar style="auto" />
       </View>
      );
    }

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
