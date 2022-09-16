/* Here I convert functional component to class component just to follow up the course of complete react developer in 2022 ZtoM */
import { Component } from "react"; /*for class component we need to import Component from react*/
import logo from "./logo.svg";
import "./App.css";
import CardList from '../src/components/Card-list/card-list.component'
import Searchbox from '../src/components/search-box/search-box.component'
class App extends Component {
  constructor() {
    /*Here we manage the state of a object*/
    /*
//Super is not actually important for what it does for our React component code.As far as you're concerned, 
all it is is it's saying, hey, call super, super just calls the underlying constructor method of any other classes you are extending from.
*/
    super();
    //state is pointing the class App
    this.state = {
      //working with array
     /* monsters: [
        {
          id:'1235eee',
          name: "Linda",
        },
        {
          id:'1235e4eee',
          name: "Frank",
        },
        {
          id:'1235eee23',
          name: "Jacky",
        },
      ],*/
     //working with api the array have to initialize with empty array
     monsters:[],
     searchField:''
     
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>
      //here we going to say return a json
      response.json()
    .then((users)=>this.setState(()=>{//the callback will be for each element///[{name:'Leanne'},{name;'Yihua'}]
      return {monsters:users}
      
    },()=>{

    })).catch(error=>console.log("I have errored"))
     );
  }
 onSearchChange= (event)=>{
    const searchField=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
     return { searchField};
    })
   }
  render() {

    const{monsters,searchField}=this.state;
     const{onSearchChange}=this;
    const filterMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className="App">
       <Searchbox className='monster-search-box' onChangeHandler={onSearchChange}/>
        <CardList monsters={filterMonsters} />
      {/*
        filterMonsters.map((monster)=>{
          return <div key={monster.id}> <h1>{monster.name}</h1></div>
        })     
      
      */}
      </div>
    );
  }
}

export default App;
