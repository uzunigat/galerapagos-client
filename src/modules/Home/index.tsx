import { Button } from "@mui/material"
import { createGame } from "../../api/game"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    const handleCreateGame = async () => {
        const game = await createGame()

        if (game) {
            navigate(`/waiting-for-players?gameGid=${game.gid}`, { state: { isOwner: true } })
        }
    }

    const handleJoinGame = async () => {
        navigate('/join-game')
    }

    return (
        <>
            <Button variant="outlined" onClick={handleCreateGame}> Create Game </Button>
            <Button variant="outlined" onClick={handleJoinGame}> Join Game </Button>
        </>
    )
}