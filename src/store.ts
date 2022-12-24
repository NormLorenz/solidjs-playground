import { createStore } from 'solid-js/store';

interface AppStore {
  mode: string,
  theme: string,
  tasks: Task[],
}

export interface Task {
  id: string,
  name: string,
  date: Date,
  completed: boolean,
}

export default createStore<AppStore>({
  mode: '',
  theme: '',
  tasks: [],
});
