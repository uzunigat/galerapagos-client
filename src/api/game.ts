import { serverUrl } from '../config'
import { fetchWithOptions } from './fetcher'
import { Game } from './models/game'

export const createGame = async () => {
  const url = `${serverUrl}/api/v1/game/new-game`
  return fetchWithOptions<Game>(url, { method: 'POST', body: JSON.stringify({}) })
}
