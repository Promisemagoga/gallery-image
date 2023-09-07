import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import StackNavigator from './StackNavigator';

export default function App() {
  return (

    <NavigationContainer>

    <StackNavigator/>
  {/* <View style={styles.container}>
   <Jonurnal/>
  </View> */}
  </NavigationContainer>



    // <View style={styles.container}>
    // <Home/>
    //   <StatusBar style="auto" />
    // </View>
  );
}


