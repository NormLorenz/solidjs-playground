import { createSignal, For } from "solid-js";
import { v4 as uuidv4 } from 'uuid';

import tasksState from './tasks.state';
import { Task } from './tasks.model';

const { tasks, setTasks } = tasksState;

const Tasks = () => {

  const [name, setName] = createSignal('');

  // add task
  const addTask = () => {
    const task: Task = { id: uuidv4(), name: name(), date: new Date(), completed: false };
    setTasks([...tasks(), task]);
    setName('');
  };

  // delete task
  const deleteTask = (id: string) => {
    const newTasks = tasks().filter(task => { return task.id != id; });
    setTasks(newTasks);
  };

  // toggle task
  const toggleTask = (id: string) => {
    const updatedTasks = tasks().map((task) => (task.id !== id ? task : { ...task, completed: !task.completed }));
    setTasks(updatedTasks);
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
            <input class="form-control me-2" id="nameField" onChange={(e) => setName(e.currentTarget.value)} type="text"
              placeholder="A task name" aria-label="Name" required value={name()} />
            <button class="btn btn-outline-primary" onClick={() => addTask()}>Create</button>
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
              <For each={tasks()}>
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
