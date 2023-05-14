import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPermisoGps } from '../redux/gpsSlice';
import Solicitudes from './Solicitudes';

function Gps({ navigation }): JSX.Element {
  const permisoGps = useSelector(state => state.gps.permisoGps);
  const dispatch = useDispatch();
  useEffect(()=>{
      console.log("permiso Gps :"+permisoGps);
  },[]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handlePermisoGps = () => {
    navigation.navigate('Home');
  }

  return <Solicitudes 
                    setPermiso={(permiso)=>{
                        dispatch(setPermisoGps(permiso));
                    }}
                    tipoNotificacion='ACCESS_FINE_LOCATION' 
                    siguientePantalla={handlePermisoGps} />
}

export default Gps;