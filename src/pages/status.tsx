import { Component, createEffect, Suspense } from 'solid-js';
import { useRouteData } from '@solidjs/router';

export default function Status() {
  const name = useRouteData<() => string>();

  createEffect(() => {
    // console.log(name());
  });

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Status</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          {/* <span>&nbsp;{name()}</span> */}
        </Suspense>
      </p>
    </section>
  );
}