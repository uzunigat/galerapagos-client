import useWebSocket from "react-use-websocket";
import { useEffect } from "react";
import { usePlayerGameRelation } from "../../api/playerGameRelation";
import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { endGame } from "../../api/game";
import { AppRoutes } from "../../context/routes";


export const WaitingForPlayers = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const playerGid = localStorage.getItem('playerGid')
  const searchParams = new URLSearchParams(document.location.search)
  const { data: players } = usePlayerGameRelation({ gid: searchParams.get('gameGid')})

  const handleFinishGame = async () => {
    await endGame(searchParams.get('gameGid')!!)
    navigate(AppRoutes.HOME)
  }

  const handleLeaveGame = () => {
    navigate(AppRoutes.HOME)
  } 

  const { lastMessage } = useWebSocket(`ws://127.0.0.1:3001/api/v1/ws?playerGid=${playerGid}&gameGid=${searchParams.get('gameGid')}`, {
    share: true,
  });

  useEffect(() => {
    if (lastMessage !== null) {
      console.log('@@ lastMessage', lastMessage);
    }
  }, [lastMessage]);

  return (
    <Container>
      {location.state?.isOwner ? <Button variant="outlined" onClick={handleFinishGame}> {"<"} </Button> : <Button variant="outlined" onClick={handleLeaveGame}> {"<"} </Button>}
      <Typography>Waiting For Players</Typography>
      <Grid container spacing={2}>
        {players?.map(player => (
          <Grid item xs={3} key={player.gid}>
            <Card key={player.gid}>
              <CardContent key={player.gid}>
                {`${player.givenName} ${player.familyName}`}
              </CardContent>
            </Card>
          </Grid>
        ))}
        {Array.from({ length: 12 - (players?.length || 0) }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card>
              <CardContent>
                {'...'}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}