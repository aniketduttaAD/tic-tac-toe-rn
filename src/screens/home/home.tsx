import React, { ReactElement } from 'react'
import { View, Image, ScrollView } from 'react-native'
import styles from './home.styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorParas } from '@config/navigator'
import { GradientBackground, Button } from '@components'

type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParas, 'Home'>
}

export default function Home({ navigation }: HomeProps): ReactElement {
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
          <Button style={styles.button} title="Settings" />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
