import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Admin() {
  const [search, setsearch] = useState("")
  const [original, setoriginal] = useState([])

  const URL = "http://localhost:3000/api/cizgifilmler"

  async function GetCartoons() {
    const res = await axios.get(URL)
    setoriginal(res.data)
  }

  useEffect(() => {
    GetCartoons()
    document.title = "Admin"
  }, [])

  async function CartoonName(params) {
  if (params==="A-dan_Z-ye") {
    const sortlanmis=await original.toSorted((a,b)=>a.title.localeCompare(b.title))
    setoriginal(sortlanmis)
  }
  else{
    const sortlanmis=await original.toSorted((a,b)=>b.title.localeCompare(a.title))
    setoriginal(sortlanmis)
  }
  
}

 async function DeLeteById(id) {
  try{let res = await axios.delete(`http://localhost:3000/api/cizgifilmler/${id}`);
  console.log("Player was deleted",res);
    }catch(err){
  console.log("there was an error", err)
}
GetCartoons()
}
useEffect(() => {
  DeLeteById()
}, [])

  return (
    <div>
      <div className='content'>
      <input
        type="text"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        placeholder='Search...'
      />
      <button onClick={() => CartoonName("A-dan_Z-ye")}>A-dan Z-e</button>
      <button onClick={() => CartoonName("Z-den_A-ya")}>Z-den A-ya</button>
  <Link to="/addadmin"><button >Cizgi film elave et</button></Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Video URL</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {
            original
  .filter(x => x.title && x.title.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <tr key={x._id}>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.videoUrl}</td>
                <td>{x.year}</td>
                <td><button onClick={() => DeLeteById(x._id)}>X</button></td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Admin
