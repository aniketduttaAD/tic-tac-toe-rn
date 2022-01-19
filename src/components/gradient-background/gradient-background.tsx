import React, { Children } from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { colors } from '@utils'

type GradientBackgroundProps = {
  children: ReactNode
}
export default function GradientBackground({
  children,
}: GradientBackgroundProps): ReactElement {
  return (
    <View style={{ flex: 2 }}>
      <StatusBar hidden />
      <LinearGradient
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        colors={['#000000', '#000006']}
      />
      {children}
    </View>
  )
}
