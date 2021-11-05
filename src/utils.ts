import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { IMessage } from './Models'

export const StylePropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.number,
  PropTypes.bool,
])

export function isSameDay(
  currentMessage: IMessage,
  diffMessage: IMessage | null | undefined,
) {
  if (!diffMessage || !diffMessage.createdAt) {
    return false
  }

  const currentCreatedAt = dayjs.unix(
    (currentMessage.createdAt as number) / 1000,
  )
  const diffCreatedAt = dayjs.unix((diffMessage.createdAt as number) / 1000)

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day')
}

export function isSameUser(
  currentMessage: IMessage,
  diffMessage: IMessage | null | undefined,
) {
  return !!(
    diffMessage &&
    diffMessage.attendee &&
    currentMessage.attendee &&
    diffMessage.attendee.id === currentMessage.attendee.id
  )
}

const styleString = (color: string) => `color: ${color}; font-weight: bold`

const headerLog = '%c[react-native-gifted-chat]'

export const warning = (...args: any) =>
  console.log(headerLog, styleString('orange'), ...args)

export const error = (...args: any) =>
  console.log(headerLog, styleString('red'), ...args)
