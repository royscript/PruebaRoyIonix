import { useLayoutEffect } from 'react';
import Solicitudes from './Solicitudes';

const Gps = ({ navigation })=>{
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return <Solicitudes tipoNotificacion='ACCESS_FINE_LOCATION' siguientePantalla={()=>navigation.navigate('AccessGps')}/>
}
export default Gps;