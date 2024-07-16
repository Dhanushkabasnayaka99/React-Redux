import { createSlice } from '@reduxjs/toolkit'

const initialState={
  name:"dhanushka",
  age:'25'
}
export const navSlice = createSlice({
  name:'nav',
  initialState,
  reducers:{
    setName:(state,action) =>{
      state.name =action.payload;
    },
    setAge:(state,action) =>{
      state.age =action.payload;
    }

  }
})
export const {setName,setAge} = navSlice.actions;

export const  selectName=(state) =>state.nav.name;
export const  selectAge=(state) =>state.nav.age;

export default navSlice.reducer;

