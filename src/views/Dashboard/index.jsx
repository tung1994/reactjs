import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDashboardSlice } from '../../slices/dashboard'
import Tableft from './Tableft'
import TabCenter from './TabCenter'
import TabRight from './TabRight'

const Dashboard = (props) => {
  const dispatch = useDispatch()
  const { actions } = useDashboardSlice()
  const [data, setData] = useState(null)
  const [page, setpage] = useState(1)

  useEffect(() => {
    dispatch(actions.initDashboard())

  }, [])

  const handlePage = useCallback(() => {
    setpage(page + 1)
  }, [page])

  const currentPage = useMemo(() => {
    return page
  },[page])

  return (
    <div className='d-flex body'>

      <Tableft />

      <TabCenter />

      <TabRight />

    </div>
  )
}

export default Dashboard
