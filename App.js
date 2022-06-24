//import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Alarm from './components/Alarm';
import Modal from './components/Modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavbar from './components/BottomNavbar';
import Try from './components/Try';
import StopTimer from './components/StopTimer';
//import BottomTab from './components/BottomTab';


const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'World Clock') {
          iconName = focused
            ? 'globe'
            : 'globe-outline';
        } else if (route.name === 'Alarm') {
          iconName = focused ? 'alarm' : 'alarm-outline';
        }
        else if (route.name === 'Timer') {
          iconName = focused ? 'timer' : 'timer-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: "black",
      },
      headerShown: false,
      tabBarActiveTintColor: '#F27405',
      tabBarInactiveTintColor: 'gray',

    })}>

      <Tab.Screen name="World Clock" component={HomeScreen} />
      <Tab.Screen name="Alarm" component={Alarm} />
      <Tab.Screen name="Timer" component={StopTimer} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="BottomTab" component={BottomTab}  options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>


           <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={Modal} options={{ headerShown: false }} />
          </Stack.Group> 
        </Stack.Navigator>
        {/* <BottomTab /> */}
      </NavigationContainer>

    </>
  );
}
