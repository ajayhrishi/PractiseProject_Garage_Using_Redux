import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store';
import '../store'

export default function CarList() {

  const dispatch = useDispatch();
  const SearchingValue = useSelector((state)=>{return state.cars.searchTerm}); // To get the current search value from searchTerm in carSlice.searchTerm state.
  const [...lists] = useSelector((state)=>{ return state.cars.lists;});  // To get the all the list of cars from carSlice.lists array. 
  function handleClick(id){  // To delete the car from the lists in the carSlice.lists array. 
    dispatch(removeCar(id));
  }

  const carListJSX = lists.map((element)=>{ // To filter out all the cars based on the value in search box and then ouput it. 
    if(element.name.toLowerCase().includes(SearchingValue.toLowerCase())){ // to see if the value in carSlice.searchTerm has any match with the selected car from carSlice.lists
      
      // will make the JSX elements here with the udpated name along with appropriate styling of the matching and non matching searchvalue portions.
    return <div className={`carIcon`}>  
     <div className='DisplayName'> {element.name} </div> <div className='DisplayCost'>- ${element.cost}</div> 
     <button className='DeleteButton' onClick={()=>handleClick(element.id)}>Delete</button>
      </div>}
  });

  return (
    <div>
         {carListJSX} 
         {SearchingValue}
    </div>
  )
}
