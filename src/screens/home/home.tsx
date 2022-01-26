import React, { ReactElement, useState } from 'react'
import { View, Image, ScrollView, Alert } from 'react-native'
import styles from './home.styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorParas } from '@config/navigator'
import { GradientBackground, Button, Text } from '@components'
import { useAuth } from '@contexts/auth-context'
import { Auth } from 'aws-amplify'

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParas, 'Home'>
}

export default function Home({ navigation }: HomeProps): ReactElement {
  const { user } = useAuth()
  const [signingOut, setSigningOut] = useState(false)
  return (
    <GradientBackground>
      <Image style={styles.logo} source={require('@assets/logo4.png')} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              navigation.navigate('SinglePlayerGame')
            }}
            style={styles.button}
            title="Single Player"
          />
          <Button style={styles.button} title="Multiplayer" />
          <Button
            loading={signingOut}
            onPress={async () => {
              if (user) {
                setSigningOut(true)
                try {
                  await Auth.signOut()
                } catch (error) {
                  Alert.alert('Error!', 'Error Signing Out!')
                }
                setSigningOut(false)
              } else {
                navigation.navigate('Login')
              }
            }}
            style={styles.button}
            title={user ? 'Logout' : 'Login'}
          />
          <Button
            onPress={() => {
              navigation.navigate('Settings')
            }}
            style={styles.button}
            title="Settings"
          />

          {user && (
            <Text weight="400" style={styles.loggedInText}>
              Logged in as <Text weight="700">{user.username}</Text>
            </Text>
          )}
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
