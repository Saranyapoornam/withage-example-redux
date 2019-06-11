const intialState ={
    age :24,
    history: [],
    edited:false
}
const reducer = (state = intialState,action) =>{
    if(action.type === 'AGE_UP'){
        return{
            ...state,
            age : state.age + action.val,
            history: state.history.concat({id:Math.random(),age : state.age + action.val})
        }
    }
    if(action.type === 'AGE_DOWN'){
        return{
            ...state,
            age : state.age - action.val,
            history: state.history.concat({id:Math.random(),age : state.age - action.val})
        }
    }
    if(action.type === 'DELETE_ITEM'){
        return{
            ...state,
            history: state.history.filter(el=> el.id !== action.key)
        }
    }
    if(action.type === 'EDIT_ITEM'){
        return{
            ...state,
            edited:true,
            editid : action.key
        }
    }
    if(action.type === 'ON_EDIT_ITEM'){
        console.log(action.val)
        return{
            ...state,
            editedval:action.val
        }
        
    }
    if(action.type === 'SAVE_ITEM'){
        console.log(state);
        console.log(state.history[action.index]);
       
        state.history[action.index].age = action.val
        console.log(state.history);
        return{
            ...state,
            history : state.history,
            edited:false
        }
    }
    return state
}

export default reducer