import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          username: '',
          password: '',
          name: '',
          email: ''
        };
      }
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }
      
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      
      }
      onSubmit(e) {
        console.log("state",this.state)
        e.preventDefault();
        const newUser = {
          username: this.state.username,
          password:this.state.password,
          name:this.state.name,
          email:this.state.email
        };
        console.log(newUser);
        axios.post('http://localhost:5000/users/users/add', newUser)
  .then(res => console.log(res.data));
        
        this.setState({
          username: '',
          email: '',
          password: '',
          name: ''
        });
      }
  render() {
    return (
        <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}