import * as React from 'react';
import { Dimensions, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeRouter from './Home';
import Setting from '../views/Setting/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
const Tab = createBottomTabNavigator()
export default function AppRouter() {
    return (
        <SafeAreaProvider>
            <View style={{ height: '100%' }}>
                <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent={true}></StatusBar>
                <NavigationContainer >
                    <Tab.Navigator>
                        <Tab.Screen name="HomeRouter" component={HomeRouter} options={{
                            headerShown: false,
                            tabBarIcon: ({ focused, color, size }) =>
                                <Icon name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                        }}>
                        </Tab.Screen>
                        <Tab.Screen name="Setting" component={Setting} options={{
                            headerShown: false, tabBarIcon: ({ focused, color, size }) =>
                                <Icon name={focused ? 'settings' : 'settings-outline'} color={color} size={size} />

                        }}></Tab.Screen>
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    )
}