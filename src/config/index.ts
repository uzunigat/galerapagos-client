export type Env = 'development' | 'testing' | 'staging' | 'production'

export const appEnv = import.meta.env.VITE_APP_ENVIRONMENT as Env

export const serverUrl = import.meta.env.VITE_SERVER_URL

export const config = Object.freeze({
  appEnv,
})
