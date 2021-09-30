import * as React from 'react';
import HomeScreen from '../views/HomeScreen';
import Detail from '../views/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
export default function HomeRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
        </Stack.Navigator >
    )
}