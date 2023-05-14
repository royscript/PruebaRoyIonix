import { createSlice } from '@reduxjs/toolkit';

export const gpsSlice = createSlice({
  name: 'gps',
  initialState: {
    permisoGps: false
  },
  reducers: {
    setPermisoGps: (state, action) => {
      state.permisoGps = action.payload;
    }
  }
});

export const { setPermisoGps } = gpsSlice.actions;

export default gpsSlice.reducer;