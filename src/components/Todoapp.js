import React, { Component } from "react"
import { connect } from 'react-redux'
import { addTask , deleteTask , completeTask } from '../Js/actionCreator'
 

//React
 class Todoapp extends Component {
    state = {
        userInput:''
    }
    handleChange = (event) =>{
        this.setState({userinput: event.target.value})
    }
    handleAdd = () =>{
        this.props.addTask({
            text:this.state.userinput, id: Math.random(),
            isComplete:false
        })
    }
    

    render() {
        return (
            <div>
            <form className='todo-form'>
                    <input className='inputt' value={this.state.userinput} onChange={this.handleChange}></input>
                    <button className='submit-btn' onClick={this.handleAdd}>ADD</button>
                    </form>
                
                    <div>{this.props.x.map((el,i) => 

<li key={el.id} className='listtt'>
    <span style={el.isComplete? {textDecoration:'line-through'}:null}>{el.text}</span>
<button className='delete-btn' onClick={()=>this.props.deleteTask(el.id)}>DELETE</button>
<button className='done-btn' onClick={()=>this.props.completeTask(el.id)}>COMPLETE</button>
</li>
)}</div>
            </div>
        )
    }
}
//Redux
//Param1 const x=state
const mapSateToProps = (state) => {
    return { x:state }
}
//param2
const mapDispatchToProps = (dispatch) =>{
    return { addTask:(payload) => dispatch(addTask(payload)),
    deleteTask:(payload)=> dispatch(deleteTask(payload)),
    completeTask:(payload)=> dispatch(completeTask(payload))
 }
}
//connect redux to react 

export default connect( mapSateToProps, mapDispatchToProps)(Todoapp)