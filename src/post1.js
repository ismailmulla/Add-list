import React, { useEffect, useState } from 'react';
import './App.css';





function User() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => {

    resp.json().then((result) => {

      console.warn(result)

      setData(result)
        })
    })
  }, [])
  console.warn(data)
  return (

    <div className='User'>
      <h3><i>react assignment</i></h3>
    

    
    </div>
  )

}
export default User;