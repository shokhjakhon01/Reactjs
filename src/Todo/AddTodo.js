import React, { useState } from 'react'
import PropTypes from 'prop-types';

function useInputValue(defaultValue = "") {
  const [value, setvalue] = useState(defaultValue)

return{
  bind:{

    value,
    onChange: event => setvalue(event.target.value)
  },
  clear: ()=> setvalue(""),
  value: ()=> value,
}
}



function AddTodo({onCreate}){
  const input = useInputValue("")
  function submitHandler(event){
    event.preventDefault()

    if(input.value().trim()){
      onCreate(input.value());
      input.clear()
    }
  }
  return(
    <form style={ {marginBottom: '10px'}} onSubmit={submitHandler}>
      <input {...input.bind} style={{width: '80%',padding: '10px'}} />
      <button style={{width: '10%',padding: '10px',cursor: 'pointer'}} type="submit">Add club</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}
export default AddTodo