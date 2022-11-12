import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store'
import {MainNavigator} from '../screens/dashboard/dashboard.routes'
import {AuthNavigator} from './auth.route'

export const AppRoute = () => {
  const {loginStatus} = useSelector((state: RootState) => state)
  //return <AuthNavigator />
  //return <MainNavigator />
  return loginStatus ? <MainNavigator /> : <AuthNavigator />
}
