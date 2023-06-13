import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        lists: [],
    },

    reducers:{
        addCar(state,action){
          state.lists.push({name:action.payload.name, cost:action.payload.cost, id:nanoid(),})   //nano id is a random id generator function in redux. 
        },// We are expecting to receive a object with the name and cost property to push in to cars state. 
    
        removeCar(state,action){
            state.lists = state.lists.filter((car)=>{return car.id!==action.payload}); // needs to check if the state.cars is getting fully updated or not. 
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
    },
})

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducers = carsSlice.reducer;  // this one won't have the {} around the name. 