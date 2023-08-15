import Main from './components/main';
import React, {useState, useEffect} from 'react';
import Page from './components/page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  
  const[poke,setPoke] = useState([]);
  const[urls, seturl] = useState([])
  const [main, setMain] = useState([]);
  const[count,setCount] = useState(20);
  const[i,setI] = useState();
  const[info, setInfo] = useState([]);

  useEffect(()=>{
    
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
    api.then((res)=>{
      return res.json()
    }).then((res)=>{
      let data = res.results;
      setPoke(data);
    })
    
    let url = poke.map((val)=>{return val.url});
    seturl(url);
    let me = async()=>{
      let data = [];
      for(const url of urls){
        let api = await fetch(url);
        let res = await api.json();
        data.push(res);
      }
      setMain(data);
      
    }
    me();
  },[main])

  let fun = ()=>{
    setCount(count+20);
  }
  let getPoke = (id)=>{
    setI(id+1);
  }

  return (
    <div style={{backgroundColor:'black', minHeight:'100vh'}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main main={main} fun={fun} getPoke={getPoke}/>}></Route>
      <Route path='/page' element={<Page main={main} getPoke={getPoke} i={i}/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
