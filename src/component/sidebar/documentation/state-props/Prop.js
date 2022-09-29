import React from 'react';  
class Prop extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "This Is From Parent",         
      }  
   }  
   render() {  
      return (  
         <div className="parent-view">   
            <Child jtpProp = {this.state.name}/>             
         </div>  
      );  
   }  
}  
class Child extends React.Component {  
   render() {  
      return (  
          <div className="child-view">  
              <h1>State & Props Example</h1>  
              <h3>{this.props.jtpProp}</h3>  
              <p>By Using props in child component we can able to get parent avlue</p>  
         </div>    
      );  
   }  
}  
export default Prop;  
