import { Route, withRouter} from 'react-router-dom';
import React,{Component} from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'
import Home from './containers/Home/Home';
class App extends Component {
  render(){
  return (
    <div>
      <Route path="/" exact component={Login}/>
     <Route path="/register" component={Register}/>
     <Route path="/home" component={Home}/>
    </div>
  );}
}

export default withRouter(App);
