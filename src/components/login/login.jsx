import React from 'react';
import styles from './login.module.css';
import logo from '../../image/newtube_ico.png';
import { useHistory } from 'react-router';

const Login = ({ authService }) => {
  const history = useHistory();
  const onLogin = (event) => {
    authService //
      .login(event.target.innerText)
      .then((data) => {
        history.push({
          pathname: 'newtube_project/main',
          state: {
            uid: data.user.uid,
          },
        });
      });
  };
  return (
    <div className={styles.loginBox}>
      <img className={styles.login__logo} src={logo} alt="youtube logo" />
      <p className={styles.login__intro}>
        Welcom, NewTube! <br />
        Please sign in your account
      </p>
      <div className={styles.login__buttons}>
        <button className={styles.login__button__google} onClick={onLogin}>
          Google
        </button>
        <button className={styles.login__button__github} onClick={onLogin}>
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
