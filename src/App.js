import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import firebase from './firebase'
import LandingPage from './LandingPage'
import MapPage from './MapPage'
import ListPage from './ListPage'

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path={'/'}>
          <LandingPage data={'hello world'} />
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
