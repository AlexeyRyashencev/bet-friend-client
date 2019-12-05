import React from 'react'

/*material ui*/
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '30%',
  },
  form: {
    padding: theme.spacing(1),
    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  loginBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <form action="" className={classes.form}>
        <TextField id="login" label="Login" fullWidth/>
        <TextField id="password" label="Password" fullWidth/>
      </form>
      <div className={classes.loginBtnWrapper}>
        <Button variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </div>
    </Container>
  )
};

export default LoginForm;
