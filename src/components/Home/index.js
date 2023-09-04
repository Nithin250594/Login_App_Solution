// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {Btn: 'Login'}

  loginBtn = () =>
    this.setState(prev => ({
      Btn: 'Logout',
    }))

  logoutBtn = () =>
    this.setState(prev => ({
      Btn: 'Login',
    }))

  render() {
    const {Btn} = this.state

    return (
      <div className="Home-bg">
        {Btn === 'Login' && (
          <div className="message-login-box">
            <Login />
            <button
              type="button"
              className="button-style"
              onClick={this.loginBtn}
            >
              Login
            </button>
          </div>
        )}
        {!(Btn === 'Login') && (
          <div className="message-login-box">
            <Logout />
            <button
              type="button"
              className="button-style"
              onClick={this.logoutBtn}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Home
