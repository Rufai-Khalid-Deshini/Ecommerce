import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import New from './components/NewArrivals/New';
import Shoes from './components/Shoes';
import Shirts from './components/Shirts';
import Bags from './components/Bags';
import Electronics from './components/Electronics';
import Jewelry from './components/Jewelry';
import Settings from './components/Profile/Settings';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={() =>
            ({
                headerShown: false
            })
        }
        >
            <Stack.Screen name='Home_' component={Home} />
            <Stack.Screen name='New' component={New} />
            <Stack.Screen name='Shirts' component={Shirts} />
            <Stack.Screen name='Bags' component={Bags} />
            <Stack.Screen name='Shoes' component={Shoes} />
            <Stack.Screen name='Electronics' component={Electronics} />
            <Stack.Screen name='Jewelry' component={Jewelry} />
        </Stack.Navigator>
    )
}

function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={() =>
                ({
                    headerShown: false
                })
            }
        >
            <Stack.Screen name='Profile_' component={Profile} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) =>
            ({
                headerShown: false,
                tabBarActiveTintColor: "black",
                // tabBarActiveTintColor: "#ffae21"
                tabBarIcon: ({color, size, focused}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(route.name === 'Cart'){
                        iconName = focused ? 'cart' : 'cart-outline';
                    }else if(route.name === 'Notification'){
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    }else if(route.name === 'Profile'){
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    display: 'flex',
                    flexDirection: 'column'
                }
            })
        }
        >
            <Tab.Screen name='Home' component={HomeStack} />
            <Tab.Screen name='Cart' component={Cart} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Profile' component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}