import React, { Suspense } from 'react'
import './App.less'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Page1 from './pages/page1'
import Page2 from './pages/page2'

function App () {
  return (
    // code-splitting + React router (https://reactjs.org/docs/code-splitting.html).
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/page/page1' component={Page1}/>
          <Route path='/page/page2' component={Page2}/>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default App