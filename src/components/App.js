import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../assets/css/App.css'
import Login from './startup/login.jsx'
import Main from './Main/main.jsx'


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
    </BrowserRouter >
  )
}

export default App
