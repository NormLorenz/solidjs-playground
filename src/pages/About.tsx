import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

const About = () => {
  const name = useRouteData<() => string>();

  createEffect(() => {
    console.log(name);
  });

  return (
    <div>

      <div>
        <div class="border d-flex justify-content-center">
          <h1>About Page</h1>
        </div>
      </div>

      <div>
        <div class="border d-flex justify-content-center">
          <p>A page all about this website.</p>
        </div>
      </div>

      <div>
        <div class="border d-flex justify-content-center">
          <p>
            <span>We love</span>
            <Suspense fallback={<span>&nbsp;</span>}>
              <span>&nbsp;{name}</span>
            </Suspense>
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
