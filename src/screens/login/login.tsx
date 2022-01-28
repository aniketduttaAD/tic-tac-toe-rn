import React, { ReactElement, useRef, useState } from 'react'
import {
  Alert,
  ScrollView,
  TextInput as NativeTextInput,
  TouchableOpacity,
} from 'react-native'
import { GradientBackground, TextInput, Button, Text } from '@components'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorParas } from '@config/navigator'
import styles from './login.styles'
import { Auth } from 'aws-amplify'

type LoginProps = {
  navigation: StackNavigationProp<StackNavigatorParas, 'Login'>
}

export default function Login({ navigation }: LoginProps): ReactElement {
  const passwordRef = useRef<NativeTextInput | null>(null)
  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const setFormInput = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value })
  }

  const login = async () => {
    setLoading(true)
    const { username, password } = form
    try {
      await Auth.signIn(username, password)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      if (error instanceof Error) navigation.navigate('SignUp', { username })
      else {
        Alert.alert('Error!', 'An error has occured!')
      }
    }
    setLoading(false)
  }

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          value={form.username}
          onChangeText={(value) => {
            setFormInput('username', value)
          }}
          returnKeyType="next"
          placeholder="Username"
          style={{ marginBottom: 15 }}
          onSubmitEditing={() => {
            passwordRef.current?.focus()
          }}
        />
        <TextInput
          value={form.password}
          onChangeText={(value) => {
            setFormInput('password', value)
          }}
          style={{ marginBottom: 25 }}
          ref={passwordRef}
          returnKeyType="done"
          secureTextEntry
          placeholder="Password"
        />
        <Button
          loading={loading}
          title="Login"
          onPress={login}
          style={{ marginHorizontal: 70 }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp')
          }}
        >
          <Text style={styles.registerLink}>
            Don&apos;t have a account, Signup now !
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword')
          }}
        >
          <Text style={styles.forgotPasswordLink}>Forgot Password ? </Text>
        </TouchableOpacity>
      </ScrollView>
    </GradientBackground>
  )
}
