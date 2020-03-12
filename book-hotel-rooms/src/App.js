import React from 'react';
import './App.css';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div >

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/rooms/' component={Rooms} exact />
        <Route path='/rooms/:unique' component={SingleRoom} exact/> 
        <Route component={ErrorPage} />
      </Switch>
      
    </div>
  );
} 

export default App;
