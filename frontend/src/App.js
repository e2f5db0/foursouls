import React, { useState } from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import BaseGame from './components/BaseGame'
import BaseExpansion from './components/BaseExpansion'
import GoldBoxEdition from './components/GoldBoxEdition'
import GoldExpansion from './components/GoldExpansion'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {

  const [playerCount, setPlayerCount] = useState(4)

  const history = useHistory()

  const setView = (view) => {
    history.push(`/${view}`)
  }

  const views = {}

  views['main'] = <Main setBody={setView} playerCount={playerCount} setPlayerCount={setPlayerCount} />

  views['baseGame'] = <BaseGame setBody={setView} playerCount={playerCount} />

  views['baseExpansion'] = <BaseExpansion setBody={setView} playerCount={playerCount} />

  views['goldBoxEdition'] = <GoldBoxEdition setBody={setView} playerCount={playerCount} />

  views['goldExpansion'] = <GoldExpansion setBody={setView} playerCount={playerCount} />

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

        <Route exact path='/baseExpansion'>
          {views['baseExpansion']}
        </Route>

        <Route exact path='/goldBoxEdition'>
          {views['goldBoxEdition']}
        </Route>

        <Route exact path='/goldExpansion'>
          {views['goldExpansion']}
        </Route>
      </Switch>
    </div>
  )

}

export default App
