import { FC } from 'react'
import { getSquareRow, getSquareColumn } from '../../utils/helpers'
import './SquaresInfo.scss'

interface Props {
  activeSquares: number[]
  currentField: number
}

export const SquaresInfo: FC<Props> = ({ activeSquares, currentField }) => {
  return (
    <div className='info'>
      <h1 className='info__title'>Hover squares</h1>
      <div className='info__container'>
        {activeSquares.map((square) => (
          <div className='info__container--squares' key={square}>
            {`row ${getSquareRow(square, currentField as number)} col ${getSquareColumn(
              square,
              currentField as number,
            )}`}
          </div>
        ))}
      </div>
    </div>
  )
}
