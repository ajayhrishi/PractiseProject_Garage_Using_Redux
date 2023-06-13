import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearchTerm } from '../store';

export default function CarSearch() {
  const dispatch = useDispatch();
  let searchTerm = useSelector((state)=>state.cars.searchTerm);

  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  
  const handleChange = (event) =>{
    dispatch(changeSearchTerm(event.target.value));
  }



  return (
    <div className='SearchBar'>
      <form onSubmit={handleSubmit} className='SearchInput'>
        <label>Search: </label><input type='text' onChange={handleChange}/>
        </form>
    </div>
  )
}
