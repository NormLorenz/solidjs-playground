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
    <div>

      <div>
        <div class="border d-flex justify-content-center">
          <h1>Settings Page</h1>
        </div>
      </div>

      <div>
        <div class="border d-flex justify-content-center">
          {/* <div onClick={() => setStore({ theme: 'dark' })} disabled={store.theme === 'dark'}>Dark</div>
          <div onClick={() => setStore({ theme: 'light' })} disabled={store.theme === 'light'}>Light</div>
          <div onClick={() => setStore({ mode: 'expert' })} disabled={store.mode === 'expert'}>Expert</div>
          <div onClick={() => setStore({ mode: 'novice' })} disabled={store.mode === 'novice'}>Novice</div> */}
        </div>
      </div>

    </div>
  );
};

export default Settings;
