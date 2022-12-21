import logo from '../logo.svg';
import styles from '../App.module.css';

const Home = () => {
  return (
    <div>

      <div>
        <div class="border d-flex justify-content-center">
          <h1>Home Page</h1>
        </div>
      </div>

      <div>
        <div class="border d-flex justify-content-center">
          <img src={logo} class={styles.logo} alt="logo" />
        </div>
      </div>

    </div>
  )
}

export default Home;
