import type { RouteDataFunc } from '@solidjs/router';
import { createResource } from "solid-js";

const fetchConfig = async (id: number) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const ConfigData: RouteDataFunc = async () => {
  const [data] = createResource(23, fetchConfig);
  return data;
}

export default ConfigData;
