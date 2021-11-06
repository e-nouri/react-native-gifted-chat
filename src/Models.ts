import { StyleProp, ViewStyle } from 'react-native'

export { ActionsProps } from './Actions'
export { AvatarProps } from './Avatar'
export {
  BubbleProps,
  RenderMessageImageProps,
  RenderMessageVideoProps,
  RenderMessageAudioProps,
  RenderMessageTextProps,
} from './Bubble'
export { ComposerProps } from './Composer'
export { DayProps } from './Day'
export { GiftedAvatarProps } from './GiftedAvatar'
export { InputToolbarProps } from './InputToolbar'
export { LoadEarlierProps } from './LoadEarlier'
export { MessageProps } from './Message'
export { MessageContainerProps } from './MessageContainer'
export { MessageImageProps } from './MessageImage'
export { MessageTextProps } from './MessageText'
export { QuickRepliesProps } from './QuickReplies'
export { SendProps } from './Send'
export { SystemMessageProps } from './SystemMessage'
export { TimeProps } from './Time'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface LeftRightStyle<T> {
  left: StyleProp<T>
  right: StyleProp<T>
}
type renderFunction = (x: any) => JSX.Element
export interface Attendee {
  id: string | number
  lastAction?: string
  requestedtoJoinAt?: number
  confirmed?: boolean
  isHost?: boolean
  wasPresent?: boolean
  isInvited?: boolean
  isModerator?: boolean
  inviter?: {
    id: string | number
    fullName?: string
    picture?: string | renderFunction
    isOnline?: boolean
    lastOnlineAt?: Date | number
  }
  user: {
    id: string | number
    fullName?: string
    picture?: string | renderFunction
    isOnline?: boolean
    lastOnlineAt?: Date | number
  }
}

export interface Reply {
  title: string
  value: string
  messageId?: any
}

export interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

export interface IMessage {
  id: string | number
  text: string
  createdAt: Date | number
  attendee: Attendee
  image?: string
  video?: string
  audio?: string
  sys?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

export type IChatMessage = IMessage

export interface MessageVideoProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  videoStyle?: StyleProp<ViewStyle>
  videoProps?: object
  // TODO: should be LightBox properties
  lightboxProps?: object
}

export interface MessageAudioProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  audioStyle?: StyleProp<ViewStyle>
  audioProps?: object
}
