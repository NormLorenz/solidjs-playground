import type { RouteDataFunc } from '@solidjs/router';
import { createResource } from "solid-js";

const fetchUser = async (id: number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const UserData: RouteDataFunc = async () => {
  const [data] = createResource(23, fetchUser);
  return data;
}

export default UserData;
