import { createSlice } from '@reduxjs/toolkit';

export const camaraSlice = createSlice({
  name: 'camara',
  initialState: {
    permisoCamara: false
  },
  reducers: {
    setPermisoCamara: (state, action) => {
      state.permisoCamara = action.payload;
    }
  }
});

export const { setPermisoCamara } = camaraSlice.actions;

export default camaraSlice.reducer;