import React from 'react'
import {Link} from 'react-router-dom';
const Cards = ({main, fun, getPoke}) => {
  console.log(main);
  
  return (
    <>
      <div className='parent' >
        {main.map((res,id)=>{
          // setI(id);
          return(
            <Link to='/page' style={{textDecoration:'none', color:'black'}}>
            <div className='card' onClick={()=>{
              getPoke(id);
              }} key={id} >
            <img src={res.sprites.front_default} className='poke' alt="" />
        <div className="info">
        <h3 style={{textTransform:'uppercase'}}>{res.name}</h3>
        <h4>{res.types[0].type.name}</h4>
        </div>
        </div>
        </Link>
        )})}
        
      </div>
      <div id="btn-div">
      <button id="btn" onClick={()=>{fun()}} >Load More...</button>
      </div>
      </>
  )
  
}


export default Cards

