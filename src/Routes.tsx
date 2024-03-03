import { Routes as ReactRoutes, Route, Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from './context/routes'
import { Login } from './modules/Login'


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
    </ReactRoutes>
  )
}
