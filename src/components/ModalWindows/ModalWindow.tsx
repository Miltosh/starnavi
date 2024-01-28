import { FC } from 'react'
import cn from 'classnames'
import { message } from '../../utils/types/message'
import './ModalWindow.scss'

interface Props {
  message: message | null
}

export const ModalWindow: FC<Props> = ({ message }) => {
  return (
    <div
      className={cn('message__show', {
        'message__show--success': !message?.error,
        'message__show--error': message?.error,
      })}
    >
      {message?.text}
    </div>
  )
}
