import React, { ReactElement, useEffect, useRef, useState } from 'react'
import {
  Alert,
  ScrollView,
  TextInput as NativeTextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
} from 'react-native'
import { GradientBackground, TextInput, Button, Text } from '@components'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackNavigatorParas } from '@config/navigator'
import styles from './signup.styles'
import { Auth } from 'aws-amplify'
import { useHeaderHeight } from '@react-navigation/elements'
import OTPInput from '@twotalltotems/react-native-otp-input'
import { colors } from '@utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Clipboard from '@react-native-clipboard/clipboard'

type SignUpProps = {
  navigation: StackNavigationProp<StackNavigatorParas, 'SignUp'>
  route: RouteProp<StackNavigatorParas, 'SignUp'>
}

export default function SignUp({
  navigation,
  route,
}: SignUpProps): ReactElement {
  const unConfirmedUserName = route.params?.username
  const headerHeight = useHeaderHeight()
  const passwordRef = useRef<NativeTextInput | null>(null)
  const emailRef = useRef<NativeTextInput | null>(null)
  const nameRef = useRef<NativeTextInput | null>(null)
  const [form, setForm] = useState({
    username: 'test',
    email: 'encarnacion35@owageskuo.com',
    name: 'test name',
    password: '12345678',
  })
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'signUp' | 'otp'>(
    unConfirmedUserName ? 'otp' : 'signUp',
  )
  const [confirming, setConfirming] = useState(false)
  const [resending, setResending] = useState(false)
  const setFormInput = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value })
  }

  const signUp = async () => {
    setLoading(true)
    const { username, password, email, name } = form
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name },
      })
      setStep('otp')
    } catch (error) {
      if (error && error instanceof Error) Alert.alert('Error!', error.message)
      else Alert.alert('Error!', 'An error has occured!')
    }
    setLoading(false)
  }

  const confirmCode = async (code: string) => {
    setConfirming(true)
    try {
      await Auth.confirmSignUp(form.username || unConfirmedUserName || '', code)
      navigation.navigate('Login')
      Alert.alert('Success!', 'You can now login to your account.')
    } catch (error) {
      if (error && error instanceof Error) Alert.alert('Error!', error.message)
      else Alert.alert('Error!', 'An error has occurred!')
    }
    setConfirming(false)
  }
  const resendCode = async (username: string) => {
    setResending(true)
    try {
      await Auth.resendSignUp(username)
    } catch (error) {
      if (error && error instanceof Error) Alert.alert('Error!', error.message)
      else Alert.alert('Error!', 'An error has occurred!')
    }
    setResending(false)
  }
  useEffect(() => {
    if (unConfirmedUserName) {
      resendCode(unConfirmedUserName)
    }
  }, [])

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {step === 'otp' && (
            <>
              <Text style={styles.otpText}>
                Enter the code you received via your email for verfication!
              </Text>
              {confirming ? (
                <ActivityIndicator color={colors.lightGreen} />
              ) : (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <OTPInput
                    placeholderCharacter="0"
                    placeholderTextColor="#5d5379"
                    pinCount={6}
                    codeInputFieldStyle={styles.otpInputBox}
                    codeInputHighlightStyle={styles.otpActiveInputBox}
                    onCodeFilled={(code) => {
                      confirmCode(code)
                    }}
                  />
                  {resending ? (
                    <ActivityIndicator color={colors.lightGreen} />
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        if (form.username) {
                          resendCode(form.username)
                        }
                        if (unConfirmedUserName) {
                          resendCode(unConfirmedUserName)
                        }
                      }}
                    >
                      <Text style={styles.resendLink}>Resend Code</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </>
          )}
          {step === 'signUp' && (
            <>
              {/* <View style={{ height: 100 }}></View> */}
              <TextInput
                value={form.username}
                onChangeText={(value) => {
                  setFormInput('username', value)
                }}
                returnKeyType="go"
                placeholder="Username"
                style={{ marginBottom: 15 }}
                onSubmitEditing={() => {
                  nameRef.current?.focus()
                }}
              />
              <TextInput
                ref={nameRef}
                value={form.name}
                onChangeText={(value) => {
                  setFormInput('name', value)
                }}
                returnKeyType="go"
                placeholder="Name"
                style={{ marginBottom: 15 }}
                onSubmitEditing={() => {
                  emailRef.current?.focus()
                }}
              />
              <TextInput
                keyboardType="email-address"
                ref={emailRef}
                value={form.email}
                onChangeText={(value) => {
                  setFormInput('email', value)
                }}
                returnKeyType="go"
                placeholder="Email"
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
                title="Sign Up"
                onPress={signUp}
                style={{ marginHorizontal: 70 }}
              />
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  )
}
