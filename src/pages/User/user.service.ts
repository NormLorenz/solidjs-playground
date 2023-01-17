export const userService = async (id: string) => {

  if (id.trim() === '') return null;

  const response = await fetch(
    `https://swapi.dev/api/people/${id}/`
  );

  return await response.json();

}
