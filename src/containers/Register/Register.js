import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Register extends Component{
    state={
        email:'',
        password:'',
        error:'sample'
        
    };
    changeHandler=(event,id)=>{
        this.state[id]=event.target.value;
    }
    appRegister=()=>{
        const authdata={
            email:this.state.email,
            password:this.state.password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD__0Z9EnBPATxTaLLA8lUFG0o022N60KA';
        axios.post(url,authdata).then(response=>{
            <Redirect to="/"/>
        }).catch(err=>{
            this.state.error=err;
        })
    }
   
    render(){
       let error=null;
       if(this.state.error){
           error=this.state.error;
       }
    return(
      <div className="container mt-3">
          {error}
         <div className="row">
          <div className="card border-success mb-3">
          <div className="card-header">Register</div>
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
          <input type="submit" className="btn btn-success" value="Register" onClick={()=>this.appRegister()}/>
          </div>
          <div className="card-footer">
              <a href="/">Login Here</a>
          </div>
          </div>
          </div>
          </div>
      </div>
    );}
}
export default Register;