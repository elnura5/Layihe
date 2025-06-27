import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css"
function Admin() {
  const [search, setsearch] = useState("")
  const [original, setoriginal] = useState([])
  const URL="http://localhost:3000/api/cizgifilmler"
  async function GetCartoons() {
    const res= await axios.get("http://localhost:3000/api/cizgifilmler")
    setoriginal(res.data)
}
useEffect(() => {
  GetCartoons()
}, [])

async function CartoonName(params) {
  if (params==="A-dan_Z-ye") {
    const sortlanmis=await original.toSorted((a,b)=>a.name.localeCompare(b.name))
    setoriginal(sortlanmis)
  }
  else{
    const sortlanmis=await original.toSorted((a,b)=>b.name.localeCompare(a.name))
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
      <title>Admin</title>
      <input type="text"
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
      placeholder='Search...' />
      <button onClick={()=>CartoonName("A-dan_Z-ye")}>A-dan Z-e</button>
      <button onClick={()=>CartoonName("Z-den_A-ya")}>Z-den A-ya</button>
 
      <table>
  <thead>
    <tr >
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
      <th scope="col">Image URL</th>
    </tr>
  </thead>
  <tbody   >
    {original
    .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
    .map((x)=>(
      <tr >
      <th scope="row">{x.name}</th>
      <td>name</td>
      <td>{x.price}</td>
      <td>{x.image}</td>
    
      <td><button onClick={()=>DeLeteById(x._id)}>delete</button></td>
      
    </tr>
    )
    )}
    
  </tbody>
</table>

    </div>
  )
}

export default Admin