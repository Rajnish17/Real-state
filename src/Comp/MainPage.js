import React, { useState } from 'react'
import Data from './Data'
import "./Main.css"

const MainPage = () => {
  // const[data,Setdata]=useState(Data);
  const[input,setInput]=useState("");
  return (
    <div>
      <div className='search-button'><input type={"text"} placeholder={"Search..."} onChange ={((e)=>{setInput(e.target.value)})}/></div>
<div>
    {
        Data.filter((val)=>{
          if(input== ""){
            return val
          }else if(val.Location.toLowerCase().includes(input.toLowerCase())
          ){
            return val
          }
        }).map((ele,index)=>{
            return <div className='Container' key={index}>
            <div className='Container-Image'> <img src= {ele.Image}></img></div>
             <div>{ele.Price}</div>
            <div>{ele.Location} </div>
            
            </div>
        })
    }
</div>

    </div>
  )
}

export default MainPage