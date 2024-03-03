import useSWR from 'swr'
import { serverUrl } from '../config'
import { Player } from './models/player'
import { fetchWithOptions } from './fetcher'

type PlayerGameRelationProps = {
  gid: string
}

export const usePlayerGameRelation = ({ gid }: PlayerGameRelationProps) => {
  const url = `${serverUrl}/api/v1/game/${gid}/players`

  const { data, isLoading } = useSWR<Player>(url, fetchWithOptions)

  return {
    data: data,
    isLoading: isLoading,
  }
}
