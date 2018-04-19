import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
  }

  render() {
    return (
      <div className="limiter">
        <div className="login-container">
          <div className="form-wrapper">
            <form>
              <h1>Member login</h1>
              <input
                className='user-input'
                placeholder="Enter your email"
                type="email"
              />
              <input
                className='user-input'
                placeholder="Enter your password"
                type="password"
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

export default Login
