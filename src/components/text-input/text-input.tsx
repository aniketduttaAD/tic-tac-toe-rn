import React, { ReactElement, forwardRef } from 'react'
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
} from 'react-native'
import { colors } from '@utils'

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.cyan,
    backgroundColor: colors.lightGreen,
    padding: 10,
    color: colors.black,
    fontFamily: 'Poppins_400Regular',
  },
})

const TextInput = forwardRef<NativeTextInput, NativeTextInputProps>(
  ({ style, ...props }: NativeTextInputProps, ref): ReactElement => {
    return (
      <NativeTextInput
        ref={ref}
        placeholderTextColor="#000000"
        style={[styles.input, style]}
        {...props}
      />
    )
  },
)

TextInput.displayName = 'TextInput'

export default TextInput
