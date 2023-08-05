import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  getFailureView = errormsg => {
    this.setState({errorMsg: errormsg, showError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {password, username} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.getSuccessView(data.jwt_token)
    } else {
      this.getFailureView(data.error_msg)
    }
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="loginCard">
        <div className="formCard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo"
          />
          <form className="formCard2" onSubmit={this.onSubmitForm}>
            <div className="inputCard1">
              <label htmlFor="input1" className="label1">
                USERNAME
              </label>
              <input
                type="text"
                className="input1"
                id="input1"
                placeholder="Username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="inputCard1">
              <label htmlFor="input2" className="label1">
                PASSWORD
              </label>
              <input
                type="password"
                className="input1"
                id="input2"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button className="button" type="submit">
              Login
            </button>
            {showError ? <p className="error">*{errorMsg}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
