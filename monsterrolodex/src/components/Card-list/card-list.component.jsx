import { Component } from "react";

class Cardlist extends Component{

    render(){
    console.log('render from cardlist');
     const{monsters}=this.props;

       return(
        <div className="card-list">
  
          {monsters.map(monster=>(
           <div className='card-container' key={monster.id}>
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
           </div>
          ))}
        </div>
       );
    }
}

export default Cardlist;