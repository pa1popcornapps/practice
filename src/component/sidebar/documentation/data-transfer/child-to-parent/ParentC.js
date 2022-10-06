
import { useState } from 'react';
import ChildC from './child/ChildC';

function ParentC() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="App">
     {data}
      <div>
        <ChildC childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default ParentC;