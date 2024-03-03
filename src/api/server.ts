import { serverUrl } from '../config'

type LoginProps = {
  email: string
  password: string
}

export const login = ({ email, password }: LoginProps) => {
  const url = `${serverUrl}/api/v1/player/login/${email}/${password}`

  return fetch(url, {
    method: 'GET',
  })
}
