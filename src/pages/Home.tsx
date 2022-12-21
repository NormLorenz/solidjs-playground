import logo from '../logo.svg';
import styles from '../App.module.css';

const Home = () => {
  return (
    <div class="container">

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <h1>Home Page</h1>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <img src={logo} class={styles.logo} alt="logo" />
        </div>
      </div>

    </div>
  )
}

export default Home;
