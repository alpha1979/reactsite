import React,{Component} from 'react';
//import Radium,{StyleRoot} from 'radium';
import styled from 'styled-components';
// import logo from './logo.svg';
import './App.css';
//import './Person/Person.css';
import Person from '../components/Persons/Person/Person';

const StyledButton = styled.button`
                          background-color : ${props=> props.alt ? 'red':'green'};
                          font :inherit;
                          border:1px solid blue;
                          padding:8px;
                          cursor: pointer;
                          color: white;
                          &:hover {
                            background-color:${props => props.alt ? 'pink' : 'lightgreen'};
                            color: black


                      `
// function App() {
class App extends Component{
  state = {
    persons: [
      {id:1,name: 'Atit', age: 40},
      {id:2,name: 'John',age: 50},
      {id:3,name: 'Kamila',age: 38},
      {id:4,name: 'Sophia', age: 3}
    ],
    otherState: "this text will go somewhere",
    showPerson : false
  }
  // switchNameHandler =()=>{
  //   this.setState({
  //     persons: [
  //       {id:1,name:'Atit Singh',age:40},
  //       {id:2,name:'Kamila Kovarova', age:38},
  //       {id:3,name:'John Malkovich', age:50},
  //       {id:4,name:'Sophia Singova', age:3}
  //     ]
  //   });
  // }

  togglePersonsHandler =()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      console.log(id);
      return p.id === id;
    });



    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons : persons })
  }

  deletePersonHandler =(personIndex)=>{
    //const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  render(){
    // const style = {
    //   backgroundColor : 'Green',
    //   font :'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover':{
    //     backgroundColor:'lightgreen',
    //     color: 'black'
    //   }
    // };
  /* this is another way of working with the conditional in JSX*/
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person
                      /*clicked ={this.deletePersonHandler.bind(this,index) this is another type of binding the function with parameter*/
                      clicked ={()=>this.deletePersonHandler(index)}
                      name = {person.name}
                      age={person.age}
                      key ={person.id}
                      changed={(event)=>this.nameChangeHandler(event,person.id)}
                    />
          })}
          {/*<Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} changed = {this.nameChangeHandler}/>
          <Person name = {this.state.persons[3].name} age={this.state.persons[3].age}>{this.state.otherState}</Person> */}
        </div>
      );
      // style.backgroundColor='Red';
      // style[':hover'] = {
      //   backgroundColor:'lightpink',
      //   color: 'blue'
      // };

    }
    const classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      //<StyleRoot>
        <div className="App">
          <h1>Hi i am always forgetting , I am also REact app</h1>
          <p className={classes.join(' ')}>Lets see if this works </p>
          {/*
          <button
          style={style}
          onClick= {this.togglePersonsHandler}>
          Switch name </button>*/}
          <StyledButton alt={this.state.showPerson} onClick={this.togglePersonsHandler}> Switch name
          </StyledButton>
          {/*this way of displaying the content conditionaly in inside the JSX*/}
          {/* this.state.showPerson ?
            <div>
              <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}/>
              <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}/>
              <Person name = {this.state.persons[2].name} age={this.state.persons[2].age} changed = {this.nameChangeHandler}/>
              <Person name = {this.state.persons[3].name} age={this.state.persons[3].age}>{this.state.otherState}</Person>
           </div> : null
          */}
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}
export default App;
//export default Radium(App);
