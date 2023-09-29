import React, { useState } from 'react';
import './Cell.css';

const Cell = ({ nameData }) => {
  // console.log(data)
  //we need 2 tatae to filter
  const[searchQuery, setSearchQuery] = useState('')
  const[filterData, setFilterData] = useState()


//second aprt do filter
//first part get value from user when they type
  const handleSearch=(e)=>{
const query = e.target.value
setSearchQuery(query)

//filter {nameData is original array}
const filter = nameData.filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase()))
//when user type text it will store in searchQuery state - what ever filter we put on filter variable
setFilterData(filter)
//what ever filter we want to store in state line above


  }
  console.log(searchQuery)
  return (
    <>
    <div className='mainBoxSearch'>
        <h2> Halloween Emojis Search</h2>
        <input type="text" 
         placeholder='Search'
         value={searchQuery} 
        //  above searchquery from from line7 
         onChange={handleSearch}
         //handleSearch is functiom handle change onChane is eventhandler that has 
         />
        
    </div>
    {/* if filterdsata is true then it will render filerData-- : means else */}
{filterData ? 

filterData.map((val) => {
  return (
    <div className="cell" key={val.id}>
    <div className='targetImage'>
        <img src={val.image}  alt={val.name} />
      </div>
      <div className='targetName'>{val.name}</div>
    </div>
  );
})
: // if nofilterdata this line else go to normal array fill all cells

      nameData.map((val) => {
        return (
          <div className="cell" key={val.id}>
            <div className='targetImage'>
              <img src={val.image}  alt={val.name} />
            </div>
            <div className='targetName'>{val.name}</div>
          </div>
        );
      })}
    </>
  );
};
export default Cell;
