import React from 'react'

class LoginForm extends React.Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('login_btn').click();
    }
  }

  render() {
    return (
      <div id='login_form' className='form-inline'>
        <div className='container'>
          <div className='jumbotron'>
            <h3>Enter your username:</h3>
            <input type='text' className='form-control col-md-11' id='username_input' onKeyPress={this.handleKeyPress} />
            <button className='btn btn-success' id='login_btn' onClick={this.props.login}>Start Chatting</button>
            <br/> <br/>
            <div>Note: No login authentication as of now
            <br/><br/>Whatever username you enter above, the user will be logged in if the username exists. If not, a new user with that username is created! </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;