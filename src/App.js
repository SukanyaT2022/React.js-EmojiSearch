import React, { useState } from 'react'
import SearchBox from './component/SearchBox'
import Cell from './component/Cell'

const App = () => {
  const [data, setData] = useState()
  return (
    <div>
      <SearchBox/>
      <Cell/>
    </div>
  )
}

export default App