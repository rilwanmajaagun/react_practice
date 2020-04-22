import React from 'react';
import './App.css';
import Home from '../shared/Components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Header from '../shared/Components/Header/Header';
import Error_page from '../shared/Components/Errorpage/Error_page';
import {Helmet} from 'react-helmet';
import Sprop_types from './PropTypes/Sprop_types';
import Thing from './Thing/Thing';
import Message from './Message/Message';
import Message_state from './Message/Message_state';
import Kids from './KIDS/Kids';
import Conditional from './Conditional_rendering/Conditional';


function App() {
  return (
    <div className="App">
      <Helmet title="A new REACT App"/>
      <Header/>
      <Switch>
        <Route exact path='/home' component={Home}/>

        {/* passing a props as and attribute wen routing, u need to declear the component as function
        {component={()=> <component attr={props}/>} the */}

        <Route exact path="/prop_types" component ={()=><Sprop_types><Header/></Sprop_types>}/>
        <Route path='/thing/:thingID' component={Thing}/>
        <Route exact path="/message" component ={()=><Message_state><Message/></Message_state>}/>
        <Route exact path='/kids' component={Kids}/>
        <Route  path='/kids/:kid' component={Kids}/>
        <Route exact path='/conditional' component={Conditional}/>
        <Route component={Error_page}/>
      </Switch>
    </div>
  );
}

export default App;
