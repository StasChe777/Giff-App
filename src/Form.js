import React from "react";

class Form extends React.Component {
    render(){
        return (
            <div className="top">
                <h1 className="Header">Get a Giff(s)</h1>
            <form onSubmit={this.props.fetchData} className="form">
                <input className="input" type="text" name="search" placeholder="Search..."/>
                <button className="btn">Go Fetch</button>
            </form>
            </div>
        );
    }
    
};

export default Form;