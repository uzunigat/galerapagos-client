import { Button } from "@mui/material"
import { createGame } from "../../api/game"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    const handleCreateGame = async () => {
        const game = await createGame()
        console.log('@@ game', game)

        if (game) {
            navigate(`/game/${game.gid}`)
        }
    }

    const handleJoinGame = async () => {}

    return (
        <>
            <Button variant="outlined" onClick={handleCreateGame}> Create Game </Button>
            <Button variant="outlined" onClick={handleJoinGame}> Join Game </Button>
        </>
    )
}