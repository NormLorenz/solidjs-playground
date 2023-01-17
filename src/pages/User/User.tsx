import { createSignal, createResource, Show, createMemo } from "solid-js";

import { userService } from './user.service';

const User = () => {

  const [input, setInput] = createSignal('');
  const [userId, setUserId] = createSignal('');
  const [user] = createResource<string, string>(userId, userService);

  const result = createMemo(() => { return user() !== null ? JSON.stringify(user(), null, 2) : ''; })

  return (
    <div class="container">
      <form>

        <div class="row p-3">
          <div class="col d-flex justify-content-center">
            <h1>Star War's User Page</h1>
          </div>
        </div>

        <div class="row p-3">
          <div class="col-lg-3"></div>
          <div class="col-lg-5">
            <div class="form-group mt-2">
              <div class="validation-container">
                <input type="text" class="form-control" placeholder="A user number between 1 ... 83*" name="user" value={input()}
                  onInput={(e) => { setInput(e.currentTarget.value); }} />
              </div>
            </div>
          </div>
          <div class="col-lg-1">
            <div class="form-group mt-2">
              <button class="btn btn-outline-primary" type="submit" onClick={(e) => { e.preventDefault(); setUserId(input()); setInput('') }}>Search</button>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>

        <div class="row p-3">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <label for="outputFormControl" class="form-label">Result:&nbsp;</label>
            <Show when={!user.loading} fallback={<div class="spinner-border spinner-border-sm" role="status"></div>}> </Show>
            <textarea class="form-control" value={result()} id="outputFormControl" rows="18"></textarea>
          </div>
          <div class="col-lg-3"></div>
        </div>

      </form>
    </div>
  );
};

export default User;
