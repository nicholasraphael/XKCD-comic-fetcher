import React from 'react';

const Results = (props) => {
    console.log(props)
    return <h2>name:{props.results.title}|  number: {props.results.num}| year:{props.results.year}<br/><img className="searchImage" title={props.results.alt} alt={props.results.title} src={props.results.img}></img></h2>
  }

export default Results;