import { Component } from 'solid-js';

import logo from '../logo.svg';
import styles from '../App.module.css';

const Home: Component = () => {
  return (
    <>
      <h1>Home Page</h1>
      <img src={logo} class={styles.logo} alt="logo" />
    </>
  )
}

export default Home;
