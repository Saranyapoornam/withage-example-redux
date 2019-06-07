import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  /*constructor(){
    super()
    this.state ={
      age: 24
    }
  }
  AgeUp =() =>{
    this.setState({
      age: this.state.age + 1
    })
  }
  AgeDown =() =>{
    this.setState({
      age: this.state.age - 1
    })
  }*/
  render(){
    
    return (
      <div className="App">
        <div>
            <h1>Age<span>{this.props.age}</span></h1>
            <button onClick={this.props.AgeUp}>Age up</button>
            <button onClick={this.props.AgeDown}>Age down</button>
            <ul>
              {
                this.props.history.map(el=> <li onClick={()=>this.props.DelItem(el.id)} key={el.id}>{el.age}</li>)
              }
            </ul>
        </div>
      </div>
    );
  }
 
}
const mapStateToProps = (state)=>{
  return{
    age: state.rUp.age,
    history: state.history
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    AgeUp : ()=>{dispatch({type:'AGE_UP',val : 1})},
    AgeDown : ()=>{dispatch({type:'AGE_DOWN',val : 1})},
    DelItem: (id)=> {dispatch({type:'DELETE_ITEM',key:id})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
