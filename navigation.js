import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Passwords from './Screens/Passwords';


const Tab = createBottomTabNavigator();

export default function navigation({passwords}) {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Passwords') {
              iconName = focused 
              ? 'ios-folder' 
              : 'ios-folder-outline';
            } 


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle :{
            backgroundColor : 'black',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: '#fff'
          },
          headerShown : false,
          
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Passwords" component={Passwords} initialParams={passwords} options={{ headerShown: true }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
  });