// this list of tasks that only lasts as long as the browser session is open

import { For } from "solid-js";
import { v4 as uuidv4 } from 'uuid';

import Store, { Task } from '../store';

const Tasks = () => {

  // destructure store
  const [store, setStore] = Store;

  let nameField: string;

  // initialize tasks
  if (store.tasks.length === 99) {
    setStore({
      tasks: [
        { id: 'de5435fb-4c87-4f19-91e1-b0b3c761198c', name: 'vacuum kitchen', date: new Date('2022-11-10'), completed: false },
        { id: 'f514156a-1c0f-4173-b12d-b1adef669a11', name: 'clean toilet', date: new Date(), completed: true },
        { id: '9053c080-eff7-4135-be66-744915904796', name: 'wash face', date: new Date('2019-12-25'), completed: false },
        { id: '1e9f41e5-09e1-475f-99a9-38520061a1b3', name: 'write code', date: new Date('2021-03-07'), completed: false },
      ]
    });
  }

  // https://www.solidjs.com/tutorial/stores_createstore

  // add task
  const addTask = (name: string) => {
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

  // toggle task
  const toggleTask = (id: string) => {
    setStore({
      tasks: store.tasks.map((task) => (
        task.id !== id ? task : { ...task, completed: !task.completed }
      ))
    })
  };

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center">
          <h1>Tasks Page</h1>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center">
          <form class="d-flex" role="search">
            <input class="form-control me-2" id="nameField" onChange={(e) => nameField = e.currentTarget.value} type="text"
              placeholder="A task name" aria-label="Name" required />
            <button class="btn btn-outline-primary" onClick={() => addTask(nameField)}>Create</button>
          </form>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center">
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
                    <td><span style={{ "text-decoration": task.completed ? "line-through" : "none" }}>{task.name}</span></td>
                    <td>{task.date.toDateString()}</td>
                    <td>{task.completed.toString()}</td>
                    <td>
                      <img src="/src/assets/checked.svg" onclick={() => toggleTask(task.id)} alt="Finished" width="24" height="24" />&nbsp;&nbsp;&nbsp;
                      <img src="/src/assets/trash.svg" onclick={() => deleteTask(task.id)} alt="Delete" width="24" height="24" />
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>

    </div >
  )
}

export default Tasks;
