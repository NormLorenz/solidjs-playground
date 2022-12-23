import { Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

const About = () => {
  const name = useRouteData<() => string>();

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>About Page</h1>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <p>
            <span>This website was created to explore the capibilities of Solidjs. We love</span>
            <Suspense fallback={
              <span>&nbsp;<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div></span>}>
              <span>&nbsp;{name}</span>
            </Suspense>
          </p>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <div class="card" style="width: 18rem;">
            <img src="/src/assets/german-compounds.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Compound Words</h5>
              <p class="card-text">German Compound Words!</p>
              <a href="#" class="btn btn-outline-primary">Go to home</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
