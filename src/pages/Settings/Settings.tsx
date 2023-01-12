import toast from 'solid-toast';

import settingsState from './settings.state';

const { settings, setSettings } = settingsState;

const notify = () => toast('Update Local Storage');

const Settings = () => {

  const handleOnClick = () => {
    notify();
  }

  const updateTheme = (theme: string) => {
    setSettings({theme: theme, mode: settings().mode});
  }
  
  const updateMode = (mode: string) => {
    setSettings({theme: settings().theme, mode: mode});
  }

  return (
    <div class="container">

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <h1>Settings Page</h1>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <form>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="themeRadioGroup" id="themeRadio1" checked={settings().theme === 'light'}
                onClick={() => updateTheme("light")} />
              <label class="form-check-label" for="themeRadio1">
                Light Theme
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="themeRadioGroup" id="themeRadio2" checked={settings().theme === 'dark'}
                onClick={() => updateTheme("dark")} />
              <label class="form-check-label" for="themeRadio2">
                Dark Theme
              </label>
            </div>
          </form>
        </div>
      </div>

      <div class="row p-3">
        <div class="col d-flex justify-content-center">
          <form>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="modeRadioGroup" id="modeRadio1" checked={settings().mode === 'novice'}
                onClick={() => updateMode('novice')} />
              <label class="form-check-label" for="modeRadio1">
                Novice Mode
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="modeRadioGroup" id="modeRadio2" checked={settings().mode === 'expert'}
                onClick={() => updateMode('expert')} />
              <label class="form-check-label" for="modeRadio2">
                Expert Mode
              </label>
            </div>
          </form>
        </div>

        <div class="row p-3">
          <div class="col d-flex justify-content-center">
            <button type="button" class="btn btn-outline-primary" onClick={() => handleOnClick()}>Display a Toaster</button>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Settings;
