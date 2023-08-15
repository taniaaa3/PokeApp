import React, {useState} from 'react'

const Api = () => {
  const[poke,setPoke] = useState([]);
  const[urls, seturl] = useState([])
  const [main, setMain] = useState([]);

  let fun = ()=>{
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
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
  }
  fun();
}

export default Api
