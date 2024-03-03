import { BrowserRouter } from "react-router-dom"
import { Routes } from "./Routes"

function App() {
  console.log('@@ App')
  
  return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  )
}

export default App
