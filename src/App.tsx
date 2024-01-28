import { FC, useState, useEffect } from 'react'
import { ModeSelector } from './components/ModeSelector/ModeSelector'
import { Squares } from './components/Squares/Squares'
import { SquaresInfo } from './components/SquaresInfo/SquaresInfo'
import { ModalWindow } from './components/ModalWindows/ModalWindow'
import { client } from './utils/fetchClient'
import { generateSquares } from './utils/helpers'
import { gameMode } from './utils/types/gameMode'
import { message } from './utils/types/message'
import './App.scss'

export const App: FC = () => {
  const [gameModes, setGameModes] = useState<gameMode[]>([])
  const [activeSquares, setActiveSquares] = useState<number[]>([])
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [message, setMessage] = useState<message | null>(null)
  const currentField = gameModes.find((mode) => mode.id === selectedMode)?.field || 5
  const squares = generateSquares(currentField)

  useEffect(() => {
    async function fetchData() {
      const res = await client.get<gameMode[]>()
      setGameModes(res)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }, [message])

  const handleStartGame = () => {
    if (selectedMode) {
      setIsGameStarted(!isGameStarted)

      if (!isGameStarted) {
        setActiveSquares([])
        setMessage({
          text: 'Game started',
          error: false,
        })
      }

      if (isGameStarted) {
        setMessage({
          text: 'Game finished',
          error: false,
        })
      }
    } else {
      setMessage({
        text: 'Please, select a mode',
        error: true,
      })
    }
  }

  const handleSquareHover = (square: number) => {
    if (isGameStarted) {
      const updatedSquares = activeSquares.includes(square)
        ? activeSquares.filter((sq) => sq !== square)
        : [square, ...activeSquares]
      setActiveSquares(updatedSquares)
    } else {
      setMessage({
        text: 'Please, start the game firstly',
        error: true,
      })
    }
  }

  return (
    <div className='game'>
      <div className='game__container'>
        <div className='game__container--selectors'>
          <ModeSelector
            isGameStarted={isGameStarted}
            gameModes={gameModes}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            setActiveSquares={setActiveSquares}
          />

          <button onClick={handleStartGame} className='game__container--button'>
            {isGameStarted ? 'Finish' : 'Start'}
          </button>
        </div>

        <Squares
          squares={squares}
          activeSquares={activeSquares}
          currentField={currentField}
          handleSquareHover={handleSquareHover}
        />
      </div>

      <SquaresInfo activeSquares={activeSquares} currentField={currentField} />

      {message && <ModalWindow message={message} />}
    </div>
  )
}
