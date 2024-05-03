import React, { useEffect, useState } from 'react';
import { getUsers } from './helpers/getUsers';
import {ShowUser} from './components/showUser';

export const CloudyUsersApp = () => {
    // guardamos los usuarios en un arreglo
    const [users, setUsers] = useState([]);

    // el useEffect en este caso se ejecuta 1 vez
    // que ejecuta? la primera funcion que establecemos
    // que devuelve? la ejecucion de ese metodo (en este caso)
    // y en el [] se le indica que se ejecute solo una vez
    useEffect(() => {
      async function getUser(){
        const usuarios = await getUsers();
        setUsers(usuarios);
        console.log(usuarios);
      }
    
      getUser();
    }, [])
    

    return (
        <>
            <h3> Los usuarios de nuestra base de datos son...</h3>

            {users.map( (user) => (
                <ShowUser key={user.id} {...user} />
            ))}
        </>
        
  )
}
