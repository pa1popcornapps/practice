import React,{ useState }  from 'react'
import SibilingB from "../sibilings/SibilingB"
export default function SibilingA() {
  const [data, setData] = useState('');
  const sibilingAToSibilingB = () => {
    setData("This is data from SibilingA");
  }
  return (
    <div className="App">
       <SibilingB sibilingAToSibilingB={data}/>
      <div className="child">
        <button primary onClick={() => sibilingAToSibilingB()}>Click Parent</button>
      </div>
    </div>
  )
}