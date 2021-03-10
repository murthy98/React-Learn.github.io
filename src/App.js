import { Route, withRouter,Switch, Redirect} from 'react-router-dom';
import React,{Component} from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'
import Home from './containers/Home/Home';
class App extends Component {
  render(){
  return (
    <Switch>
      
     <Route path="/register" component={Register}/>
     <Route path="/home" component={Home}/>
     <Route path="/" exact component={Login}/>
     <Redirect to="/"/>
    </Switch>
  );}
}

export default withRouter(App);
