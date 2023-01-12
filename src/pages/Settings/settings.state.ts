import { createSignal, createRoot, createEffect } from "solid-js";

import { Settings } from './settings.model';

const settingsState = () => {

  const { localStorage } = window;

  // initialize local storage if necessary
  const initialSettings: Settings = { theme: 'light', mode: 'novice' };
  if (localStorage.getItem('settings') === null) {
    localStorage.setItem('settings', JSON.stringify(initialSettings));
  }

  // initialize global state
  const settingsFromLocalStorage = localStorage.getItem('settings') as string;
  const initialSettings2: Settings = JSON.parse(settingsFromLocalStorage);

  // setup the signal
  const [settings, setSettings] = createSignal(initialSettings2);

  // update local storage when something changes
  createEffect(() => {
    const settingsEffect = { theme: settings().theme, mode: settings().mode };
    localStorage.setItem('settings', JSON.stringify(settingsEffect));
  });

  return { settings, setSettings };

}

export default createRoot(settingsState);
