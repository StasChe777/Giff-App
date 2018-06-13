
import React from "react";

class Giphy extends React.Component{

    render(){ 
        let toReturn
       
        if (this.props.picP !== undefined){
           // console.log(this.props.picP)
            toReturn =    (       
            <img className='picture' src={this.props.picP.images.original.url} alt={this.props.picP.images.original.url} width="500px" height="300px"/>
            )
        } 
        else {
            toReturn = ""
        }
    
        return(
                <div>
                {toReturn}
                </div>
            )
    
    };
};

export default Giphy ;