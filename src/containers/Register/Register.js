import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class Register extends Component {
    state = {
        email: '',
        password: '',
        error: 'sample'

    };
    
    changeHandler = (event, id) => {
        this.state[id] = event.target.value;
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);
    }
    render() {
        let error = null;
        if (this.state.error) {
            error = this.state.error;
        }
        let regcode=(<div className="container mt-3">
        {error}
        <form onSubmit={this.submitHandler}>
            <div className="row">
                <div className="card border-success mb-3">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <div className=" row mb-3">
                            <div className="col-lg-1">
                                <label className="col-form-label">Email</label>
                            </div>
                            <div className="col-lg-4">
                                <input type="email" className="form-control form-control-sm" placeholder="Enter your Email" onChange={(event) => this.changeHandler(event, "email")} required="required" />
                            </div>
                        </div>
                        <div className=" row mb-3">
                            <div className="col-lg-1">
                                <label className="col-form-label">Password</label>
                            </div>
                            <div className="col-lg-4">
                                <input type="password" className="form-control form-control-sm" placeholder="Enter your Password" onChange={(event) => this.changeHandler(event, "password")} required="required" />
                            </div>
                        </div>

                        <div>
                            <input type="submit" className="btn btn-success" value="Register" />
                        </div>
                        <div className="card-footer">
                            <a href="/">Login Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>);
    //console.log(this.props.token);
    if(this.props.token){
        regcode=<Redirect to="/" />
    }
        return (
        <div>{regcode}</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        token: state.registration.token,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.register(email, password)),
        //onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);