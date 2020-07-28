import React from 'react'
import { Wrapper} from 'bushido-strap'
import Content from './Components/Content'



import {
  BrowserRouter as Router, 
  
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
     
  

     </Router>
  );
}

export default App;
