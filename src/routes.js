// import React from 'react'
import Dashboard from './views/Dashboard'

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/:id', name: 'Dashboard', component: Dashboard},
]

export default routes
