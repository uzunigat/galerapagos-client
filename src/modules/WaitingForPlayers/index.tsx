import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";
import { usePlayerGameRelation } from "../../api/playerGameRelation";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { endGame } from "../../api/game";
import { AppRoutes } from "../../context/routes";

const GAME_GID = '0001.f33de625-2d99-47ba-ba99-45584303cd11'

type WaitingForPlayersProps = {
  isOwner?: boolean
}

export const WaitingForPlayers = ({isOwner = false}: WaitingForPlayersProps) => {
  const { data: players } = usePlayerGameRelation({ gid: GAME_GID })
  const location = useLocation()
  const navigate = useNavigate()
  const playerGid = localStorage.getItem('playerGid')

  const handleFinishGame = async () => {
    await endGame(GAME_GID)
    navigate(AppRoutes.HOME)
  }

  const { lastMessage, readyState } = useWebSocket(`ws://127.0.0.1:3001/api/v1/ws?playerGid=${playerGid}&gameGid=${GAME_GID}`, {
    share: true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      console.log('@@ lastMessage', lastMessage);``
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  return (
    <div>
      {location.state.isOwner && <Button variant="outlined" onClick={handleFinishGame}> {"<"} </Button>}
      WaitingForPlayers 
      {connectionStatus}
    </div>
  )
}