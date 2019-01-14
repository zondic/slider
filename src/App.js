import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import grid from 'react-bootstrap/lib/Grid';
import rol from 'react-bootstrap/lib/Row';
import col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
        <div className="wrapper">
            <SayFullName hello="Hello" world="World" />
        </div>
    );
  }
}

function SayFullName(props){
    return (
        <div>
            <h1>{props.hello} {props.world}</h1>
        </div>
    )
}

export default App;
