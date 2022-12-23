import { createEffect } from "solid-js";

import Store from '../store';

const Settings = () => {

  // destructure store
  const [store, setStore] = Store;

  createEffect(() => {
    const settings = { mode: store.mode, theme: store.theme };
    localStorage.setItem('settings', JSON.stringify(settings));
  });

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>Settings Page</h1>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <button type="button" class="btn btn-outline-primary" onClick={() => setStore({ theme: 'dark' })} disabled={store.theme === 'dark'}>Dark</button>
          <button type="button" class="btn btn-outline-primary" onClick={() => setStore({ theme: 'light' })} disabled={store.theme === 'light'}>Light</button>
          <button type="button" class="btn btn-outline-primary" onClick={() => setStore({ mode: 'expert' })} disabled={store.mode === 'expert'}>Expert</button>
          <button type="button" class="btn btn-outline-primary" onClick={() => setStore({ mode: 'novice' })} disabled={store.mode === 'novice'}>Novice</button>
        </div>
      </div>

    </div>
  );
};

export default Settings;
