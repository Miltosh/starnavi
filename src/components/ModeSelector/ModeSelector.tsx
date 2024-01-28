import { FC, ChangeEvent } from 'react'
import { gameMode } from '../../utils/types/gameMode'
import './ModeSelector.scss'

type Props = {
  gameModes: gameMode[]
  selectedMode: string | null
  setSelectedMode: (value: string | null) => void
  isGameStarted: boolean
  setActiveSquares: (value: number[]) => void
}

export const ModeSelector: FC<Props> = ({
  gameModes,
  selectedMode,
  setSelectedMode,
  isGameStarted,
  setActiveSquares,
}) => {
  const handleModeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    setSelectedMode(selectedValue)
    setActiveSquares([])
  }

  return (
    <select
      className='selector'
      value={selectedMode ?? ''}
      onChange={handleModeChange}
      disabled={isGameStarted}
    >
      <option value='' disabled hidden>
        Pick mode
      </option>
      {gameModes.map((mode) => (
        <option key={mode.id} value={mode.id} className='selector__option'>
          {mode.name}
        </option>
      ))}
    </select>
  )
}
