import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, SinglePlayerGame } from '@screens'

export type StackNavigatorParas = {
  Home: undefined
  SinglePlayerGame: undefined
}
const Stack = createStackNavigator<StackNavigatorParas>()
export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGame} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
