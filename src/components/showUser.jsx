import React from 'react'

export const showUser = ({id, name, email}) => {
  return (
    <>
        <p> El usuario {id} </p>
        <p> con el nombre {name} </p>
        <p> y el email {email} </p>
        <hr/>
    </>
  )
}
