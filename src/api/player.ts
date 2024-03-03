import { serverUrl } from '../config'
import { fetchWithOptions } from './fetcher'
import { Player } from './models/player'

type LoginProps = {
  email: string
  password: string
}

export const login = ({ email, password }: LoginProps) => {
  const url = `${serverUrl}/api/v1/player/login/${email}/${password}`

  return fetchWithOptions<Player>(url, { method: 'GET' })
}
