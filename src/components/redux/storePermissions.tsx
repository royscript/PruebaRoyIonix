import { configureStore } from '@reduxjs/toolkit';
import camaraReducer from '../redux/cameraSlice';
import gpsReducer from '../redux/gpsSlice';
import notificationReducer from '../redux/notificactionSlice';

export default configureStore({
  reducer: {
    camara: camaraReducer,
    gps : gpsReducer,
    notificacion : notificationReducer
  }
});