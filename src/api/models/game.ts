import { WeatherCard } from './weatherCard'

export type Game = {
  gid: string
  status: string
  raftLevel: number
  weatherCards: WeatherCard[]
  wreckCardGids: string[]
  foodRessources: number
  waterRessources: number
  playerTurns: Player[]
  createdAt: Date
  updatedAt: Date
}
