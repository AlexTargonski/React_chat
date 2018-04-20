import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../actions/login';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      session: {
        email: '',
        password: ''
      }
    };
  }

  handleChange(field, e) {
    let new_session = Object.assign({}, this.state.session);
    new_session[field] = e.target.value;
    this.setState({ session: new_session });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onLogin(this.state.session)
  }

  render() {
    return (
      <div className="limiter">
        <div className="login-container">
          <div className="form-wrapper">
            <form onSubmit={ this.handleSubmit.bind(this) }>
              <h1>Member login</h1>
              <input
                className='user-input'
                placeholder="Enter your email"
                type="email"
                onChange={ this.handleChange.bind(this, 'email') }
              />
              <input
                className='user-input'
                placeholder="Enter your password"
                type="password"
                onChange={ this.handleChange.bind(this, 'password') }
              />
              <button
                className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onLogin: (session) => {
      dispatch(Login(session));
    }
  })
)(SignIn);
