const intialState ={
    age :24,
    history: []
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
    return state
}

export default reducer