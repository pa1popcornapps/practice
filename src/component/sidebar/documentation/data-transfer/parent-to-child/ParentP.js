import React,{ useState }  from 'react'
import ChildP from './child/ChildP';

export default function ParentP() {
  const [data, setData] = useState('');
  
  const parentToChild = () => {
    setData("This is data from Parent Component to the Child Component.");
  }
  return (
    <div className="App">
      <ChildP parentToChild={data}/>
      <div className="child">
        <button primary onClick={() => parentToChild()}>Click Parent</button>
      </div>
    </div>
  )
}