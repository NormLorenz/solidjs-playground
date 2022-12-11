import { Component, createEffect, Suspense } from 'solid-js';

export default function Status() {

  createEffect(() => {
  });

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Status</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
        </Suspense>
      </p>
    </section>
  );
}