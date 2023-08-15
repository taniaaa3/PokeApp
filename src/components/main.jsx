import React, {useState} from 'react'
import Cards from './cards';
import Navbar from './navbar';
// import Api from './api';
import '../App.css';
const Main = ({main,fun, getPoke}) => {

  return (
    <>
      <Navbar/>
      {/* <div className='searchbar'>
        <input type="text" id='search' placeholder='Search Pokemon...' value={s} onChange={(e)=>{searchFun()}} />
      </div>
      <div className="types">
        <h3>Filter By Type</h3>
        <button>Water</button>
        <button>Grass</button>
        <button>Fire</button>
      </div> */}
      <Cards main={main} fun={fun} getPoke={getPoke}/>
    </>
  )
}

export default Main
