import { Button } from "@mui/material"
import { useGames } from "../../api/game"
import { useNavigate } from "react-router-dom"

export const JoinGame = () => {
    const {data: games} = useGames()
    const navigate = useNavigate()

    const handleJoinGame = (gid: string ) => {
        navigate(`/waiting-for-players?gameGid=${gid}`)
    }

    
    return (
        <>
            {games?.map(game => (
                <><div key={game.gid}>
                    {game.gid}
                </div><Button variant="outlined" onClick={() => handleJoinGame(game.gid)}> Join Game </Button></>
            ))}
        </>
    )
}