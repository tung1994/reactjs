import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDashboardSlice } from '../../slices/dashboard'

const Dashboard = (props) => {
  const dispatch = useDispatch()
  const { actions } = useDashboardSlice()

  useEffect(() => {
    dispatch(actions.initDashboard())
  }, [])

  return (
    <div>Hello world</div>
  )
}

export default Dashboard
