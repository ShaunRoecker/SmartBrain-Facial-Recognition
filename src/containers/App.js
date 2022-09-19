import React, { Component } from 'react';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
//import { FaPython } from "react-icons/fa";
import './App.css';
import "tachyons";


class App extends Component{

  render(){
    return (
        <div className="App">
          <Navigation />
          <div>
            <Logo />
            <ImageLinkForm />
            </div>

        </div>
    )
  }

}

export default App;
