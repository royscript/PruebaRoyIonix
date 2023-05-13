import { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';

function usePermisos(tipoPermiso : string) {
  const [permisos, setPermisos] = useState(false);
  const [recargar, setRecargar] = useState(false);
  const getPermisos = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS[tipoPermiso],
          {
            title: `Permisos para ${tipoPermiso}`,
            message: `Acepta los permisos para poder utilizar ${tipoPermiso}` ,
            buttonNeutral: 'Preguntarme mas tarde',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermisos(true);
        } else {
          setPermisos(false);
        }
        console.log(`Permiso ${tipoPermiso}: ${granted}`);
      } catch (err) {
        console.warn(err);
      }
  };
  useEffect(() => {
    getPermisos();
  }, [tipoPermiso]);
  useEffect(()=>{
    if(recargar){
      getPermisos();
      setRecargar(false);
      console.log("Recargando Permiso");
    }
  },[recargar])

  return [ permisos, setRecargar ];
}

export default usePermisos;
