import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name: 'people',
  initialState: [],
  reducers: {
    addPerson: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPerson } = peopleSlice.actions;

export default peopleSlice.reducer;