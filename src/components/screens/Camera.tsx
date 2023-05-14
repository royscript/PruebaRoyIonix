import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPermisoCamara } from '../redux/cameraSlice';
import Solicitudes from './Solicitudes';

function Camera({ navigation }): JSX.Element {
  const permisoCamara = useSelector(state => state.camara.permisoCamara);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("permiso Camara :"+permisoCamara);
  },[]);
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handlePermisoCamara = () => {
    navigation.navigate('AccessNotificacion');
  }

  return <Solicitudes 
                      setPermiso={(permiso)=>{
                        dispatch(setPermisoCamara(permiso));
                      }}
                      tipoNotificacion='CAMERA' 
                      siguientePantalla={handlePermisoCamara} />
}

export default Camera;

