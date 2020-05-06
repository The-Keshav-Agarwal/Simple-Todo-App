import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './component/layout/navbar'
import Dashboard from './component/dashboard/dashboard'
import Projectdetail from './component/project/projectdetail'
import Signin from './component/auth/signin'
import Createproject from './component/project/createproject'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/project/:id' component={Projectdetail } />
      <Route path='/signup' component={Signin} />
      <Route path='/createproject' component={Createproject} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
