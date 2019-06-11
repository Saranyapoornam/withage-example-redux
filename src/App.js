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
                this.props.history.map((el,index)=>{ return(
                  <li  key={el.id}>{el.age}<button onClick={()=>this.props.EditItem(el.id,el.age)}>Edit</button><button onClick={()=>this.props.DelItem(el.id)}>Delete </button>{this.props.edited &&  this.props.editid === el.id && <input onChange={(e)=>this.props.OnEditItem(el.id,e)}type="number" ref="ageval"/>}<button onClick={()=>this.props.SaveItem(el.id,this.props.editedval,index)}>Save</button>
                </li>
                )
              }
                )
              }
            </ul>
        </div>
      </div>
    );
  }
 
}
const mapStateToProps = (state)=>{
  return{
    age: state.age,
    history: state.history,
    edited:state.edited,
    editedval : state.editedval,
    editid:state.editid

  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    AgeUp : ()=>{dispatch({type:'AGE_UP',val : 1})},
    AgeDown : ()=>{dispatch({type:'AGE_DOWN',val : 1})},
    DelItem: (id)=> {dispatch({type:'DELETE_ITEM',key:id})},
    EditItem: (id,val)=> {dispatch({type:'EDIT_ITEM',key:id,val:val})},
    OnEditItem: (id,e)=> {dispatch({type:'ON_EDIT_ITEM',key:id,val:e.target.value})},
    SaveItem: (id,ageval,index)=> {dispatch({type:'SAVE_ITEM',key:id,val:ageval,index:index})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
