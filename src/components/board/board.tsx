import { BoardState, BoardResult } from '@utils'
import React, { ReactElement } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from '../text/text'
import BoardLine from './board-line'

type BoardProps = {
  state: BoardState
  size: number
  disabled?: boolean
  gameResult?: BoardResult | false
  onCellPressed: (index: number) => void
}

export default function Board({
  state,
  disabled,
  size,
  gameResult,
  onCellPressed,
}: BoardProps): ReactElement {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {state.map((cell, index) => {
        return (
          <TouchableOpacity
            disabled={cell !== null || disabled}
            onPress={() => onCellPressed && onCellPressed(index)}
            style={{
              width: '33.3333%',
              height: '33.3333%',
              backgroundColor: '#fff',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={index}
          >
            <Text
              style={{
                fontFamily: 'Poppins_600SemiBold',
                fontSize: size / 8,
              }}
            >
              {cell}
            </Text>
          </TouchableOpacity>
        )
      })}
      {gameResult && <BoardLine size={size} gameResult={gameResult} />}
    </View>
  )
}
