import React, { Component } from "react";
import {
  Redirect
} from "react-router-dom";

import { fakeAuth } from './fakeAuth';

export class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    //let { from } = this.props.location.state || { from: { pathname: "/" } } || this.props.from ;
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to="/protected" />;

    return (
      <div>
        {/*       <p>You must log in to view the page at {from.pathname}</p> */}
        <p>You must log in to view the page at /protected</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
