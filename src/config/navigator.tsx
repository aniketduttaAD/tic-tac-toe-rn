import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import {
  Home,
  SinglePlayerGame,
  Settings,
  Login,
  Signup,
  ChangePassword,
  ForgotPassword,
} from '@screens'
import { colors } from '@utils'

export type StackNavigatorParas = {
  Home: undefined
  SinglePlayerGame: undefined
  Settings: undefined
  Login: undefined
  SignUp: { username: string } | undefined
  ChangePassword: undefined
  ForgotPassword: undefined
}
const Stack = createStackNavigator<StackNavigatorParas>()
const navigatorOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.periwinkle,
    shadowRadius: 0,
    shadowOffset: { height: 0, width: 0 },
  },
  headerTintColor: colors.black,
  headerTitleStyle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
  },
  headerBackTitleStyle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
}

export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SinglePlayerGame"
          component={SinglePlayerGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="ChangePassword"
          options={{ title: 'Change Password' }}
          component={ChangePassword}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{ title: 'Forgot Password' }}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
