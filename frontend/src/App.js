import React, { useState } from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import GoldBoxEdition from './components/GoldBoxEdition'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Expansion from './components/Expansion'
import BaseGame from './components/BaseGame'

const App = () => {

  const [playerCount, setPlayerCount] = useState(4)

  const history = useHistory()

  const setView = (view) => {
    history.push(`/${view}`)
  }

  const views = {}

  views['main'] = <Main setBody={setView} playerCount={playerCount} setPlayerCount={setPlayerCount} />

  views['baseGame'] = <BaseGame playerCount={playerCount} />

  views['goldBoxEdition'] = <GoldBoxEdition playerCount={playerCount} />

  views['expansion'] = <Expansion playerCount={playerCount} />

  return (
    <div className="App">
      <Navbar setBody={setView} />
      <Switch>
        <Route exact path='/'>
          {views['main']}
        </Route>

        <Route exact path='/main'>
          {views['main']}
        </Route>

        <Route exact path='/baseGame'>
          {views['baseGame']}
        </Route>

        <Route exact path='/goldBoxEdition'>
          {views['goldBoxEdition']}
        </Route>

        <Route exact path='/expansion'>
          {views['expansion']}
        </Route>
      </Switch>
    </div>
  )

}

export default App
