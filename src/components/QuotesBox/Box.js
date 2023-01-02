import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import './box.css'
import{faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons'


const Box = () => {
  const[Quote,setQuote] = useState([]);

  const getQuotes = () =>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>{
      let random = Math.floor(Math.random() * data.length);
      setQuote(data[random])
    })
  }


  return (
    <>
      <div className="box quotes-card">
          <div className="box2 Quotes-Box">
          <div className="text">  
            {Quote.text}
          </div>
          <div className="logos">
            <a href={`https://twitter.com/intent/tweet?text=${Quote.text}......tweet by Quotes Website by Himanshu Chhatwal`} target="_blank"><FontAwesomeIcon className='logo twitter' icon={faTwitter} color="black"/></a>

          </div>
          <div className="author-name">~{Quote.author}</div>
          <button className='button' onClick={getQuotes}>New Quote</button>
        </div>
      </div>
    </>

  )
}

export default Box


// https://type.fit/api/quotes   