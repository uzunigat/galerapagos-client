import useSWR from 'swr'
import { serverUrl } from '../config'
import { fetchWithOptions } from './fetcher'
import { Game, GameReponse } from './models/game'
import { GameStatus } from './models/gameStatus'

export const createGame = async () => {
  const url = `${serverUrl}/api/v1/game/new`
  return fetchWithOptions<Game>(url, { method: 'POST', body: JSON.stringify({}) })
}

export const endGame = async (gid: string) => {
  const url = `${serverUrl}/api/v1/game/${gid}/end`
  return fetchWithOptions<Game>(url, { method: 'PATCH' })
}

export const getGames = async () => {
  const url = `${serverUrl}/api/v1/game?status=${GameStatus.CREATED}`
  return fetchWithOptions<Game[]>(url, { method: 'GET' })
}

export const useGames = () => {
  const url = `${serverUrl}/api/v1/game?status=${GameStatus.CREATED}`
  const { data, isLoading } = useSWR<GameReponse>(url, fetchWithOptions)

  return {
    data: data?.data,
    isLoading: isLoading,
  }
}
