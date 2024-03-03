import { Routes as ReactRoutes, Route, Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from './context/routes'
import { Login } from './modules/Login'
import { Home } from './modules/Home'
import { WaitingForPlayers } from './modules/WaitingForPlayers'
import { JoinGame } from './modules/JoinGame'


const NavigateToAddItems = () => {
  const { search } = useLocation()
  return <Navigate replace to={{ pathname: AppRoutes.LOGIN, search }} />
}

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.ROOT} element={<NavigateToAddItems />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.WAITING_FOR_PLAYERS} element={<WaitingForPlayers />} />
      <Route path={AppRoutes.JOIN_GAME} element={<JoinGame />} />
    </ReactRoutes>
  )
}
