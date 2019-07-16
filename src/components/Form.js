import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const url = 'https://kq7064tm6k.execute-api.us-west-2.amazonaws.com/Production/submit';

class SignUp extends React.Component {
  

  state = {
    firstName: '',
    email: '',
    lastName:'',
    subject: 'MK decision project',
    body: '',
  } 


handleSubmit(e) {
  e.preventDefault();
  axios.post(url, JSON.stringify(this.state))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  render(){ 
    return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        <form noValidate onSubmit={this.handleSubmit.bind(this)}>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={((e)=> {
                  this.setState({firstName: e.target.value})
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={((e)=> {
                  this.setState({lastName: e.target.value})
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                 onChange={((e)=> {
                  this.setState({email: e.target.value})
                })}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
              variant="outlined"
              label="Message"
              required
              multiline
              fullWidth
              id="body"
              rows="4"              
              margin="normal"
              onChange={((e)=> {
                  this.setState({body: e.target.value})
                })}
              />
            </Grid>            
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          > Submit
          </Button> 

        </form>

      </div> 

    </Container>
  );}
}


export default SignUp