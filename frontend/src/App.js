import React, { useState } from 'react'
import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import CardSelection from './components/CardSelection'
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

  views['baseGame'] = <CardSelection setBody={setView} playerCount={playerCount} edition={'baseGame'} />

  views['baseExpansion'] = <CardSelection setBody={setView} playerCount={playerCount} edition={'baseExpansion'} />

  views['goldBoxEdition'] = <CardSelection setBody={setView} playerCount={playerCount} edition={'goldBoxEdition'} />

  views['goldExpansion'] = <CardSelection setBody={setView} playerCount={playerCount} edition={'goldExpansion'} />

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
