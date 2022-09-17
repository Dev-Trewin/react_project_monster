import { Component } from "react";
import './card-list.style.css'
import Card from '../Card/Card.component'
class Cardlist extends Component{

    render(){
    console.log('render from cardlist');
     const{monsters}=this.props;
      
       return(
        <div className="card-list">
         
          {monsters.map((monster)=>{
       
           return (
            <Card monsters={monster}/>
           
             )
          })}
        </div>
       );
    }
}

export default Cardlist;