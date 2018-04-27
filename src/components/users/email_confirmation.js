import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailConfirmation } from '../../actions/users';

class EmailConfirmation extends Component {

  componentWillMount() {
    let token = this.props.location.query.email_token;
    this.props.onEmailConfirmation(token);
  }

  render() {
    return(
      <div>
          <strong>Success!</strong> Your email confirmed.
      </div>
      );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (token) => {
     dispatch(emailConfirmation(token));
   }
 })
)(EmailConfirmation);
