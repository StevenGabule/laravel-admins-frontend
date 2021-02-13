import React, {Component, SyntheticEvent} from "react";
import Wrapper from "../Wrapper";
import {Role} from "../../classes/role";
import axios from "axios";
import {Redirect} from "react-router-dom";

class Create extends Component {

  state = {
    roles: [],
    redirect: false
  };

  first_name = '';
  last_name = '';
  email = '';
  password = '';
  password_confirm = '';
  role_id = 0;

  componentDidMount = async () => {
    const {data} = await axios.get('/roles');
    this.setState({
      roles: data.data
    })
  }

  handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post('/users', {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      role_id: this.role_id,
      password: this.password,
    });
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/users'}/>
    }
    return (
        <Wrapper>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="first_name">First name</label>
              <input type="text" className={'form-control'} name={'first_name'}
                     onChange={e => this.first_name = e.target.value}/>
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <input type="text" className={'form-control'} name={'last_name'}
                     onChange={e => this.last_name = e.target.value}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className={'form-control'} name={'email'}
                     onChange={e => this.email = e.target.value}/>
            </div>
            <div className="form-group">
              <label htmlFor="role">Select role</label>
              <select name="role" id="role" className={'custom-select'}
                      onChange={e => this.role_id = parseInt(e.target.value)}>
                {this.state.roles.map(
                    (role: Role) => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                    )
                )}
              </select>
            </div>


            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className={'form-control'} name={'password'}
                     onChange={e => this.password = e.target.value}/>
            </div>

            <div className="form-group">
              <label htmlFor="password_confirm">Confirm Password</label>
              <input type="password" className={'form-control'} name={'password_confirm'}
                     onChange={e => this.password_confirm = e.target.value}/>
            </div>

            <button className={'btn btn-sm btn-primary'} type={'submit'}>Submit</button>

          </form>
        </Wrapper>
    )
  }
}

export default Create;