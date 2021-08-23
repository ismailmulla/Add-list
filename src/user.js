import React, { useEffect, useState } from 'react';



import './App.css';

function User() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users').then((resp) => {

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
      <table border="1">
        <tbody>
        <tr>
          <td> id</td>
          <td> name</td>
          <td> username</td>
        <td ></td>
        <td >post</td>
        <button type="button" class="btn btn-secondary">On Click</button>
          

        </tr>
        {
          data.map((item,i) =>
            <tr>
              <td> {item.id}</td>
              <td> {item.name}</td>
              <td> {item.username}</td>
              <td>{item.post}</td>
              <div>
              
              </div>
            </tr>

          )}
          </tbody>
      </table>

    </div>
  )

}
export default User;