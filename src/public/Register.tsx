import React, {Component, SyntheticEvent} from "react";
import './Public.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class Register extends Component {

  first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirm = "";

  state = {
    redirect: false
  };

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
        role_id: 1
      });

      console.log(response);
    } catch (e) {
      throw e;
    }

    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/login'}/>
    }

    return (
        <div>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h3 className="h3 mb-3 font-weight-normal">Free registration</h3>

            <label htmlFor="inputFirstName" className="sr-only">First Name</label>

            <input type="text"
                   name={"first_name"} onChange={e => this.first_name = e.target.value}
                   id="inputFirstName"
                   className="form-control"
                   placeholder="First name"
                   required autoFocus/>

            <label htmlFor="inputLastName" className="sr-only">Last Name</label>

            <input type="text"
                   name={"last_name"} onChange={e => this.last_name = e.target.value}
                   id="inputLastName"
                   className="form-control"
                   placeholder="Last name"
                   required/>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>

            <input type="email"
                   name={"email"} onChange={e => this.email = e.target.value}
                   id="inputEmail"
                   className="form-control"
                   placeholder="Email"
                   required/>

            <label htmlFor="inputPassword" className="sr-only">Password</label>

            <input type="password"
                   name={"password"} onChange={e => this.password = e.target.value}
                   id="inputPassword"
                   className="form-control"
                   placeholder="Password"
                   required/>

            <label htmlFor="inputConfirmPassword" className="sr-only">Password</label>

            <input type="password"
                   name={"password_confirm"} onChange={e => this.password_confirm = e.target.value}
                   id="inputConfirmPassword"
                   className="form-control"
                   placeholder="Confirm Password"
                   required/>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>

            <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>

          </form>

        </div>
    )
  }
}

export default Register;