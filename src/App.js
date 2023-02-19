import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState()
  // https//https://api.quotable.io/random
  const getData=async()=>{
const res=await fetch('https://api.quotable.io/random').then(res=>res.json()).then(res=>setData(res)).catch((err)=>console.log(err))
  }
  useEffect(()=>{
getData()
  },[])

  return (
<div className='container'>
<header>
  <title>quote</title>
</header>


  <div id="quote-box">
  <h1 id='text'>
 {data?.content}
  </h1>
<h5 id='author'>
{data?.author}
</h5>
<div className='tt'> 
<button id="new-quote" onClick={getData}>New Quote</button>
<div className='ttt'>
  <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text'+data?.content} target='_blank' id='tweet-quote'>tweet</a>
</div>

</div>

</div>



</div>
  );
}

export default App;
