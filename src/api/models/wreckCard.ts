import { WreckCardType } from './wreckCardType'

export type WreckCard = {
  gid: string
  name: string
  type: WreckCardType
  description: string
  isDiscarded: boolean
}
