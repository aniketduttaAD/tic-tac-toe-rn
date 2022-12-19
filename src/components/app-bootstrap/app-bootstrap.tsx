import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { Auth, Hub } from 'aws-amplify'
import { useAuth } from '@contexts/auth-context'

type AppBootstrapProps = {
  children: ReactNode
}

export default function AppBootstrap({
  children,
}: AppBootstrapProps): ReactElement {
  const [fontLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold,
  })
  const [authLoaded, setAuthLoaded] = useState(false)
  const { setUser } = useAuth()

  useEffect(() => {
    async function checkCurrentUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
      } catch (error) {
        setUser(null)
      }
      setAuthLoaded(true)
    }

    checkCurrentUser()

    function hubListener(hubData: any) {
      const { data, event } = hubData.payload
      switch (event) {
        case 'signOut':
          setUser(null)
          break
        case 'signIn':
          setUser(data)
          break
        
        default:
          break
      }
    }
    Hub.listen('auth', hubListener)
    return () => {
      Hub.remove('auth', hubListener)
    }
  }, [])
  return fontLoaded && authLoaded ? <>{children}</> : <AppLoading />
}
