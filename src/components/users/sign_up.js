import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    };
  }

  render() {
    return (
      <div className="limiter">
        <div className="login-container">
          <div className="form-wrapper">
            <form>
              <h1>Sign up</h1>
              <input
                className='user-input'
                placeholder="Enter your email"
                type="email"
              />
              <input
                className='user-input'
                placeholder="Enter your name"
                type="text"
              />
              <input
                className='user-input'
                placeholder="Enter your password"
                type="password"
              />
              <input
                className='user-input'
                placeholder="Repeat password"
                type="password"
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

export default SignUp
