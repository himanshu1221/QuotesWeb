import { async, useState } from 'react'
import React, { useEffect } from 'react'
import './box.css'


const Box = () => {

  const[Quotes,setQuotes] = useState([]);

  const getQuotes = async() => {
    const response = await fetch('https://type.fit/api/quotes')
    setQuotes(await response.json());
  }

  useEffect(()=>{
    getQuotes();
  },[])
  return (
    <>
      <div className="box quotes-card">
      {
        Quotes.map((e)=>{
          return(
            <>
          <div className="box2 Quotes-Box">
          <div className="text">
          {e.text}
          </div>
          <div className="author-name">~{e.author}</div>
          <button className='button'>New Quote</button>
        </div>
            </>
          )
        })
      }
      </div>
    </>

  )
}

export default Box