import React, { Component } from 'react';
import './Square.css';

var style1 = {
    color : "blue"
  };
  
  var style2 = {
    color : "green"
  }

function Square(props) {
    const {value} = props;
    return (
      value === "X" ?
      <button className="square" style = {style1} onClick={props.onClick}>
        {value}
      </button> :
      <button className="square" style = {style2} onClick={props.onClick}>
      {value}
    </button>
    );
}

export default Square;