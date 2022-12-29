import logo from '../assets/logo.svg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>Home Page</h1>
        </div>
      </div>
      
      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <img src={logo} class={styles.logo} alt="logo" />
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <p>Solid's overall approach to reactivity is to wrap any reactive computation in a function,
            and rerun that function when its dependencies update. The Solid JSX compiler also wraps most
            JSX expressions (code in braces) with a function, so they automatically update (and trigger
            corresponding DOM updates) when their dependencies change. More precisely, automatic rerunning
            of a function happens whenever the function gets called in a <i>tracking scope</i>, such as a JSX
            expression or API calls that build "computations" (createEffect, createMemo, etc.).</p>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <p>By default, the dependencies of a function get tracked automatically when they're called in a tracking
            scope, by detecting when the function reads reactive state (e.g., via a Signal getter or Store
            attribute). As a result, you generally don't need to worry about dependencies yourselves.
            (But if automatic dependency tracking ever doesn't produce the results you want, you can
            override dependency tracking.) This approach makes reactivity <i>composable</i>: calling one function
            within another function generally causes the calling function to inherit the dependencies of
            the called function.</p>
        </div>
      </div>

    </div>
  )
}

export default Home;
