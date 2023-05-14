import { useLayoutEffect, useEffect } from 'react';
import Solicitudes from './Solicitudes';
import { setPermisoNotification } from '../redux/notificactionSlice';
import { useSelector, useDispatch } from 'react-redux';

function Notification({ navigation }): JSX.Element {
    const permisoNotification = useSelector(state => state.notificacion.permisoNotification);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("permiso Notificacion :"+permisoNotification);
    },[]);
    useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
  
    const handlePermisoNotificacion = () => {
      navigation.navigate('AccessGps');
    }
    return <Solicitudes 
                        setPermiso={(permiso)=>{
                            dispatch(setPermisoNotification(permiso));
                        }}
                        tipoNotificacion='POST_NOTIFICATIONS' 
                        siguientePantalla={handlePermisoNotificacion} 
            />
}
export default Notification;