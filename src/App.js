import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import MapPage from './MapPage'
import ListPage from './ListPage'

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path={'/'}>
          <LandingPage />
        </Route> 

        <Route path={'/map'}>
          <MapPage />
        </Route> 

        <Route path={'/list'}>
          <ListPage />
        </Route> 
      </Switch>
    </>
  )
}
