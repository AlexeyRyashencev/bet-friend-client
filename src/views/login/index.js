import React from 'react';

/*components*/
import LoginForm from "./login-form";

/*styles*/
import styles from './styles.module.scss';
const Login = () => (
  <div className={styles.home}>
    <LoginForm />
  </div>);

export default Login;
