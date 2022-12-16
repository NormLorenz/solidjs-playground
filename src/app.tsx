import { Component, lazy } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';

// import logo from './logo.svg';
import styles from './App.module.css';

// import Home from './pages/Home';
// import Users from './pages/Users';

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));
const Error = lazy(() => import('./pages/Error'));

const App: Component = () => {
  return (

    <div class={styles.App}>

      <h5>before navigation</h5>

      <nav class={styles.navigation}>
        <A href='/'>Home</A>
        <A href='/sign-up'>Sign Up</A>
        <A href='/login'>Login</A>
        <A href='/users'>Users</A>
        <A href='/sdfsdf'>Error</A>
        <A href='/jjjjjk'>Anottther Error</A>
      </nav>

      <h5>after navigation</h5>
      <h5>before routes</h5>

      <Routes>
        <Route path='/' component={Home} />
        <Route path='/users' component={Users} />
        <Route path={['login', 'sign-up']} element={<h1>This is the login/sign up screen</h1>} />
        <Route path='**' component={Error} />
      </Routes>

      <h5>after routes</h5>

      {/* <header class={styles.header}> */}
      {/* <img src={logo} class={styles.logo} alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a> */}
      {/* </header> */}

      {/* <Home>
        <>
        <h1>sdf</h1>
        </>
      </Home> */}

    </div>
  );
};

export default App;
