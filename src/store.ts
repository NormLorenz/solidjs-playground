import { createStore } from 'solid-js/store';

interface AppStore {
  mode: string,
  theme: string,
}

export default createStore<AppStore>({
  mode: '',
  theme: '',
});
