import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => { setData(data); console.log('>>> data: ', data) })
      .catch(err => console.error('>>> error: ', err))
  }, [])

  return (
    <div style={{ padding: '50px' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.idusers}</td>
              <td>{d.username}</td>
              <td>{d.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App