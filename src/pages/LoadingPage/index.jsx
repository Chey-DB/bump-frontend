import React from 'react'
import axios from 'axios'
import { useAuth } from '../../Context'


const LoadingPage = () => {
    const { user, setUser } = useAuth();

    axios.get('http://localhost:3000/auth/checkUser', { withCredentials: true })
    .then(response => {
      const userId = response.data._id
      const username = response.data.google.username
      if (response.data) {
        // User is logged in
        // Use the user data
        console.log(response.data._id);
      } else {
        // User is not logged in
        console.log("User is not logged in");
      }
    });

  return (
    <div>LoadingPage</div>
  )
}

export default LoadingPage