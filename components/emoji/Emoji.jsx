import React from 'react'
import './emoji.css'
import { useEffect,useState } from 'react'
const Emoji = () => {
    let[data,setData]=useState([])
    let[search,setSearch]=useState('')

useEffect(()=>{
   fetch('https://emoji-api.com/emojis?access_key=828108296156c0255f9ed01633858dbf621a9f7e')
   .then(res=>res.json())
   .then(res=>setData(res))
},[])

let handleSearch=(e)=>{
setSearch(e.target.value)
}
let handleSubmit=()=>{
if(search!== ''){
  fetch(`https://emoji-api.com/emojis?search=${search}&access_key=828108296156c0255f9ed01633858dbf621a9f7e`)
    .then(res=>res.json())
    .then(res=>{
        if(res){
            setData(res)
        }else{
            setData([])
        }
    })
}
}

  return (
         <div>
          <a href="https://hareesh-portfolio-netlify.netlify.app/" className='ram'>@HareeshRam</a>
    <div className='App'>
       
     <div className='menu'>
       <div className='menu-text'>
       <h1>Emoji Search</h1>
  <p>A Simple Emoji search with React</p>

  <div>
  <input type="text" placeholder='Search' value={search} onChange={(e)=>handleSearch(e)} />
  <button className='search' onClick={()=>handleSubmit()}>Search</button>
  </div>

       </div>
     </div>
     <div className='container'>
       {
        data.map((e,i)=>

<div className='card' key={e.slug} onClick={()=>{navigator.clipboard.writeText(e.character)}}>
        <p className='emo'>{e.character}</p>
        <p className='name'>{e.unicodeName}</p>
        <a href=""></a>
       </div>
        )
       }
       
       
       
       
       

       
     </div>

    </div>
    </div>
  )
}

export default Emoji