import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeName,ChangeCost,addCar } from '../store'



export default function CarForm() {
  const dispatch = useDispatch();

  let {name,cost} = useSelector((state)=>{ //returning object has a property of name and cost. it will be assinged to the name,cost variables that is defined outside.
    return { name: state.forms.name,  // this line will get the value of name and make a new 'name' object property to be assinged to the same named another 'name' variable that is outside. 
          cost: state.forms.cost} // this line will get the value of cost and make a new 'cost' object property to be assinged to the same named another 'name' variable that is outside. 
  });

  function handleCostChange(event){
    dispatch(ChangeCost(event.target.value));
  }
  function handleNameChage(event){
   dispatch(ChangeName(event.target.value));
  }
  function handleSubmit(event){
    event.preventDefault();
    dispatch(addCar({name,cost}));
    dispatch(ChangeCost(''));
    dispatch(ChangeName(''));
  }

  return (
    <div className='SubmitForm'>
        <form onSubmit={handleSubmit}>
            <input onChange={handleNameChage} value={name} className='InputName'/>
            <input onChange={handleCostChange} type='number' value={cost} className='InputCost'/>
              <button onClick={handleSubmit} className='ButtonAdd'>Add it</button>
      </form>

    </div>

  )
}
