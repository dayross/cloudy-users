
export const getUsers = async() => {
  const url = `http://129.158.44.95:3000/users`;
  const resp = await fetch(url);
  const {data} = resp.json();
  const users = data.map(user => ({
    id : user.id,
    name : user.name,
    email : user.email
}));
return users;
}
