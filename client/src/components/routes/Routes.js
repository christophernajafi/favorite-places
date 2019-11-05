import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NotFoundPage from '../not-found-page/NotFoundPage'

const Routes = ()=> {
  return (
    <Switch>
      <Route exact path='/' component={}/>
      <Route exact path='/about' component={}/>
      <Route exact path='/log-in' component={}/>
      <Route exact path='/sign-up' component={}/>
      <Route exact path='/lists' component={}/>
      <Route component={NotFoundPage}/>
    </Switch>
  )
}

export default Routes
