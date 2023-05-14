import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    permisoNotification: false
  },
  reducers: {
    setPermisoNotification: (state, action) => {
      state.permisoNotification = action.payload;
    }
  }
});

export const { setPermisoNotification } = notificationSlice.actions;

export default notificationSlice.reducer;