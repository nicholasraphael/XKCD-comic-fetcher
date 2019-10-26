import React from 'react';

const Results = (props) => {
    console.log(props)
    return <img className="searchImage" title={props.results.alt} alt={props.results.title} src={props.results.img}></img>
  }

export default Results;