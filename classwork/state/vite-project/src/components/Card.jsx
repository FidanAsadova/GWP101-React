import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
        <h3>Name: {user.name}</h3>
        <h5>Email: {user.email}</h5>
        <h5>Address: {user.address.city}</h5>
    </div>
  )
}

export default Card