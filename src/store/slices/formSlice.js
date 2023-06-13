import { createSlice } from "@reduxjs/toolkit";

let formSlice = createSlice({
    name:"forms",
    initialState: { name:'',  //.forms.name
                    cost: 0,    //.forms.cost
                },
    reducers:{
        ChangeName(state,action){
            state.name = action.payload;
        },
        ChangeCost(state,action){
            state.cost = action.payload;
        },
    },
});

export const {ChangeName,ChangeCost} = formSlice.actions;
export const formReducer = formSlice.reducer;  // this one won't have the {} around the name. 