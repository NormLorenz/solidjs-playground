import { createEffect } from 'solid-js';

import Store from '../store';

const Settings = () => {

  // destructure store
  const [store, setStore] = Store;

  const handleOnClick = () => {
    const settings = { mode: store.mode, theme: store.theme };
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  // move to settings
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
          <form>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="themeRadioGroup" id="themeRadio1" checked={store.theme === 'light'}
                onClick={() => setStore({ theme: 'light' })} />
              <label class="form-check-label" for="themeRadio1">
                Light Theme
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="themeRadioGroup" id="themeRadio2" checked={store.theme === 'dark'}
                onClick={() => setStore({ theme: 'dark' })} />
              <label class="form-check-label" for="themeRadio2">
                Dark Theme
              </label>
            </div>
          </form>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <form>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="modeRadioGroup" id="modeRadio1" checked={store.mode === 'novice'}
                onClick={() => setStore({ mode: 'novice' })} />
              <label class="form-check-label" for="modeRadio1">
                Novice Mode
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="modeRadioGroup" id="modeRadio2" checked={store.mode === 'expert'}
                onClick={() => setStore({ mode: 'expert' })} />
              <label class="form-check-label" for="modeRadio2">
                Expert Mode
              </label>
            </div>
          </form>
        </div>

        <div class="row pt-2">
          <div class="col d-flex justify-content-center border">
            <button type="button" class="btn btn-outline-primary" onClick={() => handleOnClick()}>Save to Global Storage</button>
          </div>
        </div>
       
      </div>
    </div>
  )
};

export default Settings;
