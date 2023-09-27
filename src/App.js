import React, { useState } from 'react';
import SearchBox from './component/SearchBox';
import Cell from './component/Cell';
import { data } from './Data';

const App = () => {
  const [passData, setPassData] = useState();

  return (
    <div>
      {/* <SearchBox /> */}
      {/* pass data to cell.js by propc-- parent to child */}
      <Cell nameData={data} />
    </div>
  );
};

export default App;
