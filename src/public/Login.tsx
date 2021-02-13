import React, {Component, SyntheticEvent} from "react";
import './Public.css';
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  email = "";
  password = "";
  state = {
    redirect: false,
  }

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    } catch (e) {
      throw e;
    }

    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />
    }
    return (
        <div>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>

            <input type="email"
                   id="inputEmail"
                   className="form-control"
                   placeholder="Email address"
                   onChange={e => this.email = e.target.value}
                   required autoFocus/>

            <label htmlFor="inputPassword" className="sr-only">Password</label>

            <input type="password"
                   id="inputPassword"
                   onChange={e => this.password = e.target.value}
                   className="form-control" placeholder="Password"
                   required/>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
          </form>

        </div>
    )
  }
}

export default Login;