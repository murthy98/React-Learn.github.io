import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Login extends Component{
    state={
        email:'',
        password:'',
        error:''
    };
    changeHandler=(event,id)=>{
        this.state[id]=event.target.value;
    }
    appLogin=()=>{
        const authdata={
            email:this.state.email,
            password:this.state.password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD__0Z9EnBPATxTaLLA8lUFG0o022N60KA';

        axios.post(url,authdata).then(response=>{
           console.log(response);
           return <Redirect to="/home"/>;
        }).catch(err=>{
            //console.log(err);
            this.state.error=err;
        })
    }
    render(){
    return(
      <div className="container mt-3">
         <div className="row">
          <div className="card border-success mb-3">
          <div className="card-header">Login</div>
          <form onSubmit={this.props.onAuth}>
          <div className="card-body">
          <div className=" row mb-3">
        <div className="col-lg-1">
            <label className="col-form-label">Email</label>
        </div>
        <div className="col-lg-4">
          <input type="email" className="form-control form-control-sm" placeholder="Enter your Email" onChange={(event)=>this.changeHandler(event,"email")} required="required"/>
          </div>
          </div>
          <div className=" row mb-3">
        <div className="col-lg-1">
            <label className="col-form-label">Password</label>
        </div>
        <div className="col-lg-4">
          <input type="password" className="form-control form-control-sm" placeholder="Enter your Password" onChange={(event)=>this.changeHandler(event,"password")} required="required"/>
          </div>
          </div>
          <div>
          <input type="submit" className="btn btn-success" value="Login" />
          </div>
          <div className="card-footer">
              <a href="/register">Register Here</a>
          </div>
          </div>
          </form>
          </div>
          </div>
      </div>
    );}
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch( actions.auth( this.state.email, this.state.email, false ) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/home' ) )
    };
};
export default connect( null, mapDispatchToProps )(Login);