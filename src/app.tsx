import { Component, lazy } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';

import logo from './logo.svg';
import styles from './App.module.css';

// import Home from './pages/Home';
// import Users from './pages/Users';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

const App: Component = () => {
  return (

    <div class={styles.App}>

      <nav class={styles.navigation}>
        <A href='/'>Home</A>
        <A href='/sign-up'>Sign Up</A>
        <A href='/users'>Users</A>
      </nav>

      <Routes>
        <Route path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path={['login', 'sign-up']} element={<h1>This is the login/sign up screen</h1>} />
      </Routes>

      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
