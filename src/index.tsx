import React, { ReactElement } from 'react'
import { AppBootstrap } from '@components'
import Navigator from '@config/navigator'
import { SettingsProvider } from '@contexts/settings-context'

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      <SettingsProvider>
        <Navigator />
      </SettingsProvider>
    </AppBootstrap>
  )
}
