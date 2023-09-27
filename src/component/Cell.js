import React, { useState } from 'react';
import './Cell.css';

const Cell = ({ nameData }) => {
  // console.log(data)
  //we need 2 tatae to filter
  const[searchQuery, setSearchQuery] = useState('')
  const[filterData, setFilterData] = useState()


  const handleSearch=(e)=>{
const query = e.target.value
setSearchQuery(query)
  }
  console.log(searchQuery)
  return (
    <>
    <div className='mainBoxSearch'>
        <h2>Emoji Search</h2>
        <input type="text" 
         placeholder='Search'
         value={searchQuery} 
        //  above searchquery from from line7 
         onChange={handleSearch}
         //handleSearch is functiom handle change
         />
        
    </div>
    {/* if filterdsata is true then it will render filerData-- : means else */}
{filterData ? 

filterData.map((val) => {
  return (
    <div className="cell" key={val.id}>
      <div>
        <img src={val.image} width={20} height={20} alt={val.name} />
      </div>
      <div>describe{val.name}</div>
    </div>
  );
})
: // if nofilterdata this line else go to normal array

      nameData.map((val) => {
        return (
          <div className="cell" key={val.id}>
            <div>
              <img src={val.image} width={20} height={20} alt={val.name} />
            </div>
            <div>describe{val.name}</div>
          </div>
        );
      })}
    </>
  );
};
export default Cell;
