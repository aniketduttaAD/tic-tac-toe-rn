import React, { useEffect, useState, ReactElement } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { GradientBackground, Board } from '@components'
import styles from './single-player-game.styles'
import {
  isEmpty,
  BoardState,
  isTerminal,
  getBestMove,
  Cell,
  useSounds,
} from '@utils'

export default function Game(): ReactElement {
  //prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);
  const [turn, setTurn] = useState<'HUMAN' | 'BOT'>(
    Math.random() < 0.5 ? 'HUMAN' : 'BOT',
  )
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true)
  const playSound = useSounds()
  playSound('winner1')

  const gameResult = isTerminal(state)

  const insertCell = (cell: number, symbol: 'x' | 'o'): void => {
    const stateCopy: BoardState = [...state]
    if (stateCopy[cell] || isTerminal(stateCopy)) return
    stateCopy[cell] = symbol
    setState(stateCopy)
    try {
      symbol === 'x'
        ? popSoundRef.current?.replayAsync()
        : pop2SoundRef.current?.replayAsync()
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnCellPressed = (cell: number): void => {
    if (turn !== 'HUMAN') return
    insertCell(cell, isHumanMaximizing ? 'x' : 'o')
    setTurn('BOT')
  }

  const getWinner = (winnerSymbol: Cell): 'HUMAN' | 'BOT' | 'DRAW' => {
    if (winnerSymbol === 'x') {
      return isHumanMaximizing ? 'HUMAN' : 'BOT'
    } else if (winnerSymbol === 'o') {
      return isHumanMaximizing ? 'BOT' : 'HUMAN'
    } else {
      console.log(isHumanMaximizing)
      return 'DRAW'
    }
  }

  useEffect(() => {
    if (gameResult) {
      const winner = getWinner(gameResult.winner)
      console.log(winner)

      if (winner === 'HUMAN') {
        try {
          winSoundRef.current?.replayAsync()
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        } catch (error) {
          console.log(error)
        }
        alert('YOU WON...')
      }
      if (winner === 'BOT') {
        try {
          lossSoundRef.current?.replayAsync()
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
        } catch (error) {
          console.log(error)
        }
        alert('YOU LOST!!!')
      }
      if (winner === 'DRAW') {
        try {
          drawSoundRef.current?.replayAsync()
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
        } catch (error) {
          console.log(error)
        }
        alert("It's A Draw")
      }
    } else {
      if (turn === 'BOT') {
        if (isEmpty(state)) {
          const centerAndCorners = [0, 2, 6, 8, 4]
          const firstMove =
            centerAndCorners[
              Math.floor(Math.random() * centerAndCorners.length)
            ]
          insertCell(firstMove, 'x')
          setIsHumanMaximizing(false)
          setTurn('HUMAN')
        } else {
          const best = getBestMove(state, !isHumanMaximizing, 0, -1)
          insertCell(best, isHumanMaximizing ? 'o' : 'x')
          setTurn('HUMAN')
        }
      }
    }
  }, [state, turn])

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground>
        <Board
          disabled={Boolean(isTerminal(state)) || turn !== 'HUMAN'}
          onCellPressed={(cell) => {
            handleOnCellPressed(cell)
          }}
          state={state}
          size={350}
        />
      </GradientBackground>
    </SafeAreaView>
  )
}