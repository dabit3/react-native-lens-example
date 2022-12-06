import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profiles from './Profiles'
import ViewProfile from './ViewProfile'
import ViewComments from './ViewComments'
import ViewFollowing from './ViewFollowing'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Profiles}  />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="ViewComments" component={ViewComments} />
        <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
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
