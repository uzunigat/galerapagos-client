export type GetToken = () => Promise<string>

export type FetchError = {
  statusText: string
  status: number
  error_code: string
  error_message: string
}

async function customFetch<T>(url: string, options: RequestInit = {}): Promise<T> {
  const { headers = {}, method = 'GET', ...otherOptions } = options

  const resp = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...headers },
    method,
    ...otherOptions,
  })

  if (resp.status === 204) {
    return undefined as unknown as T
  } else if (resp.ok) {
    const body = await resp.json()
    return body
  } else {
    const error = await resp.json()
    return Promise.reject({ statusText: resp.statusText, status: resp.status, ...error })
  }
}

export async function fetchWithOptions<T>(url: string, options: RequestInit = {}): Promise<T> {
  const { headers = {}, method = 'GET', ...otherOptions } = options

  const opts = {
    headers: { 'Content-Type': 'application/json', ...headers },
    method,
    ...otherOptions,
  }

  return customFetch<T>(url, opts)
}
