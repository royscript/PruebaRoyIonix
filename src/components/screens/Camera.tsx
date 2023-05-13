import { useLayoutEffect } from 'react';
import Solicitudes from './Solicitudes';

function Camera({ navigation }): JSX.Element {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return <Solicitudes tipoNotificacion='CAMERA' siguientePantalla={()=>navigation.navigate('AccessNotificacion')}/>
}

export default Camera;
