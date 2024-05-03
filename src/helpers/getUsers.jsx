
export const getUsers = async() => {
  const url = `http://129.158.44.95:3000/users`;
  const resp = await fetch(url);
  const users = await resp.json();
return users;
}
