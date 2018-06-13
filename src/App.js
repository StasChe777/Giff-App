import React, { Component } from 'react';
import Form from './Form';
import Giphy from './Giphy';

import './App.css';

const API_KEY = 'J293eaukD9AfLzXrgRuSkPHrTyz0WxVL';

class App extends Component {
  state = {
   pic: [undefined],
  }

fetchData = async(e) => {
  
    e.preventDefault();
    const search = e.target.elements.search.value;

    const API_CALL = await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API_KEY}`);
    const data = await API_CALL.json();
  console.log(data.data)

 
    this.setState({
      pic: data.data,
    })


  }

  render() {
  var toReturn =[]
 this.state.pic.forEach(function(pic){
  toReturn.push(<Giphy picP = {pic} />)
  
 })

    return (
      <div>
      <Form fetchData = {this.fetchData}/>
      {toReturn}
      </div>
    );
  }
}

export default App;
