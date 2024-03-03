import { GameStatus } from './gameStatus'
import { Meta } from './meta'
import { Player } from './player'
import { WeatherCard } from './weatherCard'

export type Game = {
  gid: string
  status: GameStatus
  raftLevel: number
  weatherCards: WeatherCard[]
  wreckCardGids: string[]
  foodRessources: number
  waterRessources: number
  playerTurns: Player[]
  createdAt: Date
  updatedAt: Date
}

export type GameReponse = {
  data: Game[]
  meta: Meta
}
