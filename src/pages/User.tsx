import { createSignal, createResource } from "solid-js";

const fetchUser = async (id: any) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const User = () => {
  const [userId, setUserId] = createSignal();
  const [user] = createResource(userId, fetchUser);

  return (
    <div class="container">

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <h1>Star War's User Page</h1>
        </div>
      </div>

      <div class="row pt-2">
        <div class="col d-flex justify-content-center border">
          <form class="d-flex" role="search">
            <input type="number" min="1" class="form-control me-2" id="numberField" placeholder="A number between 1 ... 75" onInput={(e) => setUserId(e.currentTarget.value)} />
          </form>
        </div>
      </div>

      <div class="row pt-2">
        <div class="card">
          <span>{user.loading && "Loading..."}</span>
          <div>
            <pre>{JSON.stringify(user(), null, 2)}</pre>
          </div>
        </div>
      </div>

    </div>
  );
};

export default User;
