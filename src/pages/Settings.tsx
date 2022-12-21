import { createEffect } from "solid-js";

import Store from '../store';

const Settings = () => {

  const [store, setStore] = Store;

  createEffect(() => {
    console.log('mode 2: ', store.mode);
    console.log('theme 2: ', store.theme);
    const settings = { mode: store.mode, theme: store.theme };
    localStorage.setItem('settings', JSON.stringify(settings));
  });

  return (
    <div class="container">

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <h1>Settings Page</h1>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex justify-content-center border">
          <button type="button" class="btn btn-success" onClick={() => setStore({ theme: 'dark' })} disabled={store.theme === 'dark'}>Dark</button>
          <button type="button" class="btn btn-success" onClick={() => setStore({ theme: 'light' })} disabled={store.theme === 'light'}>Light</button>
          <button type="button" class="btn btn-success" onClick={() => setStore({ mode: 'expert' })} disabled={store.mode === 'expert'}>Expert</button>
          <button type="button" class="btn btn-success" onClick={() => setStore({ mode: 'novice' })} disabled={store.mode === 'novice'}>Novice</button>
        </div>
      </div>

    </div>
  );
};

export default Settings;
