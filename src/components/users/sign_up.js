import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/users';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        password_confirmation: ''
      }
    };
  }

  handleChange(field, e) {
    let new_user = Object.assign({}, this.state.user);
    new_user[field] = e.target.value;
    this.setState({ user: new_user });
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onSignUp(this.state.user)
  }

  render() {
    return (
      <div className="limiter">
        <div className="login-container">
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <h1>Sign up</h1>
              <input
                className='user-input'
                placeholder="Enter your email"
                type="email"
                onChange={this.handleChange.bind(this, 'email')}
              />
              <input
                className='user-input'
                placeholder="Enter your firstname"
                type="text"
                onChange={this.handleChange.bind(this, 'first_name')}
              />

              <input
                className='user-input'
                placeholder="Enter your lastname"
                type="text"
                onChange={this.handleChange.bind(this, 'last_name')}
              />

              <input
                className='user-input'
                placeholder="Enter your password"
                type="password"
                onChange={this.handleChange.bind(this, 'password')}
              />
              <input
                className='user-input'
                placeholder="Repeat password"
                type="password"
                onChange={this.handleChange.bind(this, 'password_confirmation')}
              />
              <button
                className="btn">
                Sign up
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
    onSignUp: (user) => {
      dispatch(signUp(user));
    }
  })
)(SignUp);
