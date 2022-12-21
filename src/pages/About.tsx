import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

const About = () => {
  const name = useRouteData<() => string>();

  createEffect(() => {
    console.log(name);
  });

  return (
    <div class="container">

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <h1>About Page</h1>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <p>A page all about this website.</p>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <p>
            <span>We love</span>
            <Suspense fallback={
              <span>
                &nbsp;
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </span>}>
              <span>
                &nbsp;{name}
              </span>
            </Suspense>
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
