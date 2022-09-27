import React, { Component } from 'react';

class SetState extends Component {
    constructor() {  
        super();        
        this.state = {  
            msg: "Welcome to JavaTpoint"  
        };      
        this.updateSetState = this.updateSetState.bind(this);  
     }  
     updateSetState() {  
         this.setState({  
            msg:"Its a best ReactJS tutorial"  
         });  
     }  
     render() {  
        return (  
           <div className="set-state">  
               <h1>{this.state.msg}</h1>  
               <button onClick = {this.updateSetState}>SET STATE</button>  
           </div>  
        );  
     }  
}
export default SetState;