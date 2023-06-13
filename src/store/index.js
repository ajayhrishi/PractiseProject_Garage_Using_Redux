import {configureStore} from  '@reduxjs/toolkit'
import { carsReducers,addCar,removeCar,changeSearchTerm } from './slices/carsSlice'
import { ChangeName,ChangeCost, formReducer } from './slices/formSlice'


const store = configureStore({
    reducer: {
    cars: carsReducers,
    forms: formReducer,
}
});

export {store,addCar,removeCar,changeSearchTerm,ChangeName,ChangeCost};


