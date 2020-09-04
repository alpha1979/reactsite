import React from 'react';
//import Radium from 'radium';
// import styled from 'styled-components';
import classes from './Person.module.css';


// const StyleDiv = styled.div`
//           width:60%;
//           margin:16px auto;
//           border :1px solid #eee;
//           box-shadow: 0 2px 3px #ccc;
//           padding: 16px;
//           text-align: center;
//
//
//           @media (min-width : 500px) {
//                   width:450px
//                  }
//
//           `;

const person = (props)=>{
  // const style ={
  //   '@media(min-width : 500px)': {
  //     width:'450px' }
  // };
  return (

    <div className={classes.Person}>
    {/*<StyleDiv>*/}
      <p onClick={props.clicked}> I am {props.name} and {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    {/*</StyleDiv> */}
    </div>
  );

};

export default person;
//export default Radium(person);
