import { createSignal, createResource, Show } from "solid-js";

const fetchUser = async (id: any) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const User = () => {
  const [userId, setUserId] = createSignal();
  const [user] = createResource(userId, fetchUser);

  return (
    <div class="container">
      <form>

        <div class="row">
          <div class="col d-flex justify-content-center border">
            <h1>Star War's User Page</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-3 border"></div>
          <div class="col-6">
            <label for="inputFormControl" class="form-label">User's number:</label>
            <input type="number" min="1" max="75" class="form-control" id="inputFormControl" placeholder="A number between 1 ... 75"
              onInput={(e) => setUserId(e.currentTarget.value)} />
          </div>
          <div class="col-3 border"></div>
          <div class="col-3 border"></div>
          <div class="col-6">
            <label for="outputFormControl" class="form-label">Result:&nbsp;</label>
            <Show when={!user.loading} fallback={<div class="spinner-border spinner-border-sm" role="status"></div>}> </Show>
            <textarea class="form-control" value={JSON.stringify(user(), null, 2)} id="outputFormControl" rows="18"></textarea>
          </div>
          <div class="col-3 border"></div>
        </div>

      </form>
    </div>
  );
};

export default User;
