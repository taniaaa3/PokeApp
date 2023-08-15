import React, { useEffect, useState } from 'react'
import Navbar from './navbar';
import '../page.css';

const Page = ({i}) => {
  const[info,setInfo] = useState([])
  const[abi, setAbi] = useState([]);
  const[image, setImage] = useState([]);
  const[Moves, setMoves] = useState([]);
  const[type,setTypes] = useState([]);
  const[loader, setLoader] = useState(true);
  
  useEffect(()=>{
    fun();
  },[])

  let fun = async()=>{
    let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await api.json();
    setInfo(data);
    setAbi(data.abilities);
    setImage(data.sprites.other.home);
    setMoves(data.moves);
    setTypes(data.types);
  }


  return (
    <>
      <Navbar/>
      <div className="back-btn">
        <button onClick={()=>window.history.back()}><i class="fa-solid fa-angles-left">go back</i></button>
      </div>
      <div className='sec-div'>
      <div className="leftSec">
        <div className="img-div">
        <h1 style={{textTransform:'uppercase', textAlign:'center'}}>{info.name}</h1>
      <img src={image.front_default} alt='This is an image of a pokemon' />
      </div>
      <div className='info-div'>
          <div>
            <h4>Height</h4>
            <p>{info.height}</p>
          </div>
          <div>
            <h4>Weight</h4>
            <p>{info.weight}</p>
          </div>
      </div>
      </div>
      <div className='rightSec'>
          <div className="abilities">
              <h3>ABILITIES</h3>
              <div className="inside-div">
              {abi.map((val)=>{
                return(
                  <p>{val.ability.name}</p>)
              })}
          </div>
          </div>
          <div className="moves">
            <h3>MOVES</h3>
<div className="inside-div">
              {Moves.map((val)=>{
                return(
                  <p>{val.move.name}</p>
                )
              })}
              </div>
          </div>
          <div className="types">
          <h3>TYPES</h3>
          <div className="inside-div">
              {type.map((val)=>{
                return(
                  <p>{val.type.name}</p>
                )
              })}
              </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default Page
