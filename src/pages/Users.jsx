import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
  const { id } = useParams();
  const [user, setUser] = useState({})

const fetchUser = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(data)
}
useEffect(() => {
    fetchUser()
}, [])  
return (
  <div>
  <Link to="/">Go Back</Link>
    <p>{ user.id }</p>
    <p>{ user.name }</p>
    <p>{ user.email }</p>
    <p>{ user.username }</p>
  </div>
  )
};

export default Users;
 