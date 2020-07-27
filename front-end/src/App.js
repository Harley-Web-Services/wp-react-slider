import React from 'react'
import { Wrapper} from 'bushido-strap'
import Content from './Components/Content'
import Login from './Components/auth/admin-login'


import {
  BrowserRouter as Router, 
  Switch,
  Route,

} from "react-router-dom"

function App(props) {


  return (
    <Router>

    <Route exact path="/">
      <Wrapper>
     <Content/>
      </Wrapper>
    </Route>
     
    <Switch>
    
     <Route path="/login">
       <Login/>
     </Route>
 

     </Switch>

     </Router>
  );
}

export default App;
