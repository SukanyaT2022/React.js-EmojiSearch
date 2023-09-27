import React from 'react'
import './SearchBox.css'
import {data} from '../Data.js'


const SearchBox = () => {
    console.log(data)
  return (

  
<div className='mainBoxSearch'>
        <h2>Emoji Search</h2>
        <input type="text" placeholder='Search'/>
    </div>


    
  )
}

export default SearchBox