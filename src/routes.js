// import React from 'react'
import Dashboard from './views/Dashboard'

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/:id', exact: true, name: 'Dashboard', component: Dashboard},
]

export default routes
