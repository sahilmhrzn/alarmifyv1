import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Alarm from "./Alarm";
import HomeScreen from "./HomeScreen";
import StopTimer from "./StopTimer";


const Tab = createBottomTabNavigator();

export default function BottomTab() {
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
            tabBarActiveTintColor: '#F27405',
            tabBarInactiveTintColor: 'gray',

        })}>

                <Tab.Screen name="World Clock" component={HomeScreen} />
                <Tab.Screen name="Alarm" component={Alarm} />
                <Tab.Screen name="Timer" component={StopTimer} />
        </Tab.Navigator>
    )
}