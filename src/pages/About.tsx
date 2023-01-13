import { Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

const About = () => {
  
  const name = useRouteData<() => string>();

  return (
    <div class="container">

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <h1>About Page</h1>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <p>
            <span>This website was created to explore the capibilities of Solidjs. We love</span>
            <Suspense fallback={
              <span>&nbsp;<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div></span>}>
              <span>&nbsp;{name}</span>
            </Suspense>
          </p>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <div class="card" style="width: 36rem;">
            <span class="p-3">
            <img src="/src/assets/solidjs-performance.png" class="card-img-top" alt="..." />
            </span>
            <div class="card-body">
              <h5 class="card-title">Solidjs Performance</h5>
              <p class="card-text">Almost as fast as vanilla Javascript!</p>
              <a href="#" class="btn btn-outline-primary">Go to home</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
