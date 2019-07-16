import React from 'react';

class GoogleAuth extends React.Component {
  state={
    isSignedIn : null,
  }

  componentDidMount() {
      window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init({
          clientId: '651782573945-14l3d6ca3c3fqgs3i5l8q5kajj394jm1.apps.googleusercontent.com',
          scope: 'email',
        }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange)

      })
    })
  }

  onAuthChange = ()=>{
    this.setState({ isSignedIn : this.auth.isSignedIn.get() })
  }

  TosignInClick = ()=>{
    this.auth.signIn();
  }

  TosignOutClick = ()=>{
    this.auth.signOut();
  }

  renderAuthButton(){    
    if(this.state.isSignedIn === null){
      return null
    }else if(this.state.isSignedIn === true){
      return (
        <button onClick={this.TosignOutClick} className='ui red google button'>
          <i className='google icon'/>
          Sign Out
        </button>  
      )
    }else{
      return (
        <button onClick={this.TosignInClick} className='ui red google button'>
          <i className='google icon'/>
          Sign In with Google
        </button>  
      )
    }
    
  }


  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth
