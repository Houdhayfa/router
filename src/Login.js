import React from 'react';
import { Redirect } from 'react-router-dom';


 class Login extends React.Component {

  constructor() {

    super();

    this.state = {
      redirectToReferrer: false
    }
    this.login = this.login.bind(this);
  }

    login() {
    
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })}
    logout() {
    
        fakeAuth.unauthenticate(() => {
          this.setState({ redirectToReferrer: false })
        })}

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }


}

export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}
export default Login
