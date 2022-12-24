// this list of tasks only lasts as long as the browser session is open

// import { batch, createSignal, For } from "solid-js";
import { For } from "solid-js";
import { createStore } from "solid-js/store";
import { v4 as uuidv4 } from 'uuid';

import Store, { Task } from '../store';
// import { createLocalStore, removeIndex } from "../utils";

// type TodoItem = {
//   title: string; done: boolean
// };

const Tasks = () => {

  // destructure store
  const [store, setStore] = Store;
  // const [fields, setFields] = createStore();

  let nameFormControl: HTMLInputElement;

  // initialize tasks
  if (store.tasks.length === 0) {
    setStore({
      tasks: [
        { id: 'de5435fb-4c87-4f19-91e1-b0b3c761198c', name: 'vacuum kitchen', date: new Date('2022-11-10'), completed: false },
        { id: 'f514156a-1c0f-4173-b12d-b1adef669a11', name: 'clean toilet', date: new Date(), completed: true },
        { id: '9053c080-eff7-4135-be66-744915904796', name: 'wash face', date: new Date('2019-12-25'), completed: false },
        { id: '1e9f41e5-09e1-475f-99a9-38520061a1b3', name: 'write code', date: new Date('2021-03-07'), completed: false },
      ]
    });
  }

  // const bob = (a: number) => a + 100;

  // new task
  const createTask = (name: string) => {
    const task: Task = { id: uuidv4(), name: name, date: new Date(), completed: false };
    setStore({
      tasks: [...store.tasks, task]
    });
  };

  // delete task
  const deleteTask = (id: string) => {
    const tasks = store.tasks.filter(task => { return task.id != id; });
    setStore({
      tasks: tasks
    });
  };

  // complete task
  const completeTask = () => {
    // to be determined
  };

  // const [newTitle, setTitle] = createSignal("");
  // const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", []);

  // const addTodo = (e: SubmitEvent) => {
  //   e.preventDefault();
  //   batch(() => {
  //     setTodos(todos.length, {
  //       title: newTitle(),
  //       done: false,
  //     });
  //     setTitle("");
  //   });
  // };

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>Tasks Page</h1>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <form class="d-flex" role="search">
            <input class="form-control me-2" id="nameFormControl" type="text" placeholder="A task name" aria-label="Name" required />
            <button class="btn btn-outline-primary" onClick={() => createTask('wash car')}>Create</button>
          </form>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Completed</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <For each={store.tasks}>
                {(task, i) => (
                  <tr>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.date.toDateString()}</td>
                    <td>{task.completed.toString()}</td>
                    <td>
                      <img src="/src/assets/checked.svg" alt="Finished" width="24" height="24" />&nbsp;&nbsp;&nbsp;
                      <img src="/src/assets/trash.svg" onclick={() => deleteTask(task.id)} alt="Delete" width="24" height="24" />
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div class="row pt-2">
        <div class="col d-flex justify-content-center border">

          <form onSubmit={addTodo}>
            <input placeholder="Enter a todo and click +" required value={newTitle()} onInput={(e) => setTitle(e.currentTarget.value)} />
            <button>+</button>
          </form>

          <For each={todos}>
            {(todo, i) => (
              <div>
                <input type="checkbox" checked={todo.done} onChange={(e) => setTodos(i(), "done", e.currentTarget.checked)} />
                <input type="text" value={todo.title} onChange={(e) => setTodos(i(), "title", e.currentTarget.value)} />
                <button onClick={() => setTodos((t) => removeIndex(t, i()))}>x</button>
              </div>
            )}
          </For>

        </div>
      </div> */}

    </div >
  )
}

export default Tasks;
