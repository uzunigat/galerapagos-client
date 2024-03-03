import { Button, Container, FormControl, Input, InputLabel } from "@mui/material"
import { useState } from "react"
import { login } from "../../api"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async () => {
        console.log('@@ Submited')
        const response = await login({ email, password })
        if (response.status === 200) {
            navigate('/home')
        }
    }
    
    return (
        <Container>
            <FormControl>
                <InputLabel > email </InputLabel>
                <Input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
        
            <FormControl>
                <InputLabel> password </InputLabel>
                <Input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>

            <Button onClick={handleSubmit}> Login </Button>
        </Container>
    )
}
    