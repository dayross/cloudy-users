import React, { useState } from 'react';
import { getUsers } from './helpers/getUsers';
import {showUser} from './components/showUser';

export const CloudyUsersApp = async() => {
    // guardamos los usuarios en un arreglo
    const [users, setUsers] = useState([]);
    // mandamos llamar el fetch de usuarios
    const newUsers = await getUsers();
    // los agregamos al arreglo
    setUsers(newUsers);

    return (
        <>
            <h3> Los usuarios de nuestra base de datos son...</h3>

            {users.map( (user) => (
                <showUser key={user.id} {...user} />
            ))}
        </>
        
  )
}
