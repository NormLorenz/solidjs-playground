// https://www.solidjs.com/examples/todos - this version uses local and global storage
// https://www.solidjs.com/examples/simpletodos - this version uses local storage

// this list of tasks only lasts as long as the browser session

import { batch, createSignal, For } from "solid-js";
import Store from '../store';
import { createLocalStore, removeIndex } from "../utils";

type TodoItem = {
  title: string; done: boolean
};

const Tasks = () => {

  // destructure store
  const [store, setStore] = Store;

  // initialize tasks
  // setStore({
  //   tasks: [
  //     { id: 0, name: 'vacuum living room', date: new Date, completed: false },
  //     { id: 1, name: 'clean toilet', date: new Date, completed: true },
  //   ]
  // });

  // add new tasks
  setStore({
    tasks: [...store.tasks, { id: 1, name: 'vacuum kitchen', date: new Date(), completed: false }]
  });
  setStore({
    tasks: [...store.tasks, { id: 2, name: 'clean toilet', date: new Date(), completed: true }]
  });
  setStore({
    tasks: [...store.tasks, { id: 3, name: 'wash face', date: new Date(), completed: false }]
  });
  setStore({
    tasks: [...store.tasks, { id: 4, name: 'write code', date: new Date('2021-03-07'), completed: false }]
  });

  // remove a task
  // const newlist = store.tasks.filter(task => { return task.id != 2; });
  // setStore({
  //   tasks: newlist
  // });

  const [newTitle, setTitle] = createSignal("");
  const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", []);

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault();
    batch(() => {
      setTodos(todos.length, {
        title: newTitle(),
        done: false,
      });
      setTitle("");
    });
  };

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>Tasks Page</h1>
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
                {/* <th scope="col"></th> */}
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
                    {/* <td>{i}</td> */}
                    <td>
                      <img src="/src/assets/checked.svg" alt="Finished" width="16" height="16" />&nbsp;&nbsp;&nbsp;
                      <img src="/src/assets/trash.svg" alt="Delete" width="16" height="16" />
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row pt-2">
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
      </div>

    </div >
  )
}

export default Tasks;
