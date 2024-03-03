import { Meta } from './meta'

export type Player = {
  gid: string
  email: string
  password: string
  familyName: string
  givenName: string
}

export type PlayerResponse = {
  data: Player[]
  meta: Meta
}
