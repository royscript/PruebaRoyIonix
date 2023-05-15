# PruebaRoyIonix
Documentación proyecto, desarrollado en React Native Cli, SDK 18.
Se utilizó redux para guardar el estado de los permisos de la cámara, gps y notificaciones.
<h1>Indicaciones</h1>
*Descarga

git clone https://github.com/royscript/PruebaRoyIonix.git

*Cargar dependencias

cd PruebaRoyIonix
npm install


*Correr proyecto

npx react-native start



<h1>Componentes</h1> 
<h1>Solicitudes</h1>

El componente Solicitudes es un componente que recibe diferentes tipos de permisos como argumentos y muestra la información correspondiente según el tipo de permiso enviado. Este componente también utiliza el hook usePermisos, que se encarga de dar permisos y conocer el estado de los permisos.

Importación de los componentes necesarios:

```javascript
import { Text, View, Image } from 'react-native';
import usePermisos from "../../hooks/usePermisos";
import ButtonGradient from '../forms/ButtonGradient';
import ButtonWhite from '../forms/ButtonWhite';
import cameraImage from '../../assets/artwork3.png';
import notificationImage from '../../assets/artwork2.png';
import gpsImage from '../../assets/artwork1.png';
import { useEffect, useState } from 'react';
import solicitudesStyles from '../styles/solicitudesStyles';
```
* Text, View e Image son componentes nativos de React Native que se utilizan para renderizar texto, contenedores y imágenes, respectivamente.
* usePermisos es un hook personalizado que se utiliza para dar permisos y conocer el estado de los permisos.
* ButtonGradient y ButtonWhite son componentes personalizados que se utilizan para renderizar botones con diferentes estilos.
* useEffect y useState son hooks nativos de React que se utilizan para realizar efectos secundarios y manejar estados, respectivamente.
* cameraImage, notificationImage y gpsImage son imágenes que se utilizan para mostrar información en el componente.
* solicitudesStyles es un objeto que contiene estilos personalizados para el componente.

<h1>Información de cada pantalla de permisos:</h1>


```javascript
const accessInformation = {
    camera: {
        title: 'Camera Access',
        description: 'Please allow access to your camera to take photos',
        background: cameraImage
    },
    notification: {
        title: 'Enable push',
        description: 'notificationsEnable push notifications to let send you personal news and updates.',
        background: notificationImage
    },
    gps: {
        title: 'Enable location services',
        description: 'We wants to access your location only to provide a better experience by helping you find new friends nearby.',
        background: gpsImage
    }
};
```

* accessInformation es un objeto que contiene información para cada pantalla de permisos. 
* Cada objeto dentro de este objeto tiene tres propiedades: title, description y background, que corresponden al título, descripción e imagen de fondo que se mostrará en cada pantalla de permisos.

<h1>Componente Solicitudes:</h1>
Muestra de código:
   
```javascript

    const Solicitudes = (props : any)=>{
    const { tipoNotificacion, siguientePantalla, setPermiso } = props;
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image, setImage ] = useState(null);
    useEffect(()=>{
        /* Dependiendo del permiso enviado es la pantalla y la solicitud que se muestra */
        switch (tipoNotificacion) {
            case 'CAMERA':
                setTitle(accessInformation.camera.title);
                setDescription(accessInformation.camera.description);
                setImage(accessInformation.camera.background);
                break;
            case 'ACCESS_FINE_LOCATION':
                setTitle(accessInformation.gps.title);
                setDescription(accessInformation.gps.description);
                setImage(accessInformation.gps.background);
                break;
            case 'POST_NOTIFICATIONS':
                setTitle(accessInformation.notification.title);
                setDescription(accessInformation.notification.description);
                setImage(accessInformation.notification.background);
                break;
            default:
                break;
        }
    },[])
    /*
    hook usePermisos : sirve para dar permisos y conocer el estado de los permisos
    permisos : muestra el estado del permiso : true (permitido), false (no permitido)
    setRecargar : permite recargar los permisos
    */
    const [ permisos, setRecargar ] = usePermisos(tipoNotificacion,siguientePantalla);
    const handleRecargar = ()=>{
        setRecargar(true);
    }
    useEffect(()=>{
        setPermiso(permisos)
    },[permisos])
    return (
        <View style={solicitudesStyles.container}>
            <View style={solicitudesStyles.section}>
            <View style={solicitudesStyles.imageContainer}>
                { image&&(
                    <Image source={image} style={solicitudesStyles.image} />
                ) }
            </View>
            </View>
            <View style={solicitudesStyles.section}>
            <View style={solicitudesStyles.titleContainer}>
                <Text style={solicitudesStyles.title}>{title}</Text>
            </View>
            </View>
            <View style={solicitudesStyles.section}>
            <View style={solicitudesStyles.textContainer}>
                <Text style={solicitudesStyles.text}>{description}</Text>
            </View>
            
            </View>
            <View style={solicitudesStyles.section}>
            <View style={solicitudesStyles.buttonContainer}>
                <ButtonGradient title={permisos?'Enable':'Allow'} onPress={()=>handleRecargar()}/>
                <ButtonWhite title='Cancel' onPress={()=>siguientePantalla()}/>
            </View>
            </View>
        </View>
    );

```

<h1>Componente Notification</h1>

Este componente es responsable de manejar la pantalla de solicitud de permiso de notificaciones push en la aplicación. Se utiliza el componente Solicitudes dentro de este componente para mostrar la información relevante sobre la solicitud de permiso y para manejar la respuesta del usuario a la solicitud.

```javascript
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
```

<h1>Componente NoResults</h1>

Este componente se utiliza para mostrar un mensaje de "No hay resultados" en las pantallas de búsqueda de la aplicación cuando no se encuentra ningún resultado. El componente contiene una imagen y un título que se muestran al usuario.

```javascript
import { View, Text, Image } from 'react-native';
import solicitudesStyles from '../styles/solicitudesStyles';
import noDataImage from '../../assets/artworkNoData.png';
const images = {
    noData : noDataImage
}
const NoResults = ()=>{
    return (
        <View style={solicitudesStyles.container}>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.imageContainer}>
                    { images&&(
                        <Image source={images.noData} style={solicitudesStyles.image} />
                    ) }
                </View>
            </View>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.titleContainer}>
                    <Text style={solicitudesStyles.title}>No Results</Text>
                </View>
            </View>
            <View style={solicitudesStyles.section}>
                <View style={solicitudesStyles.textContainer}>
                    <Text style={solicitudesStyles.text}>No results were found for your search.</Text>
                </View>
            </View>
        </View>
    )
}
export default NoResults;
```

<h1>Loading</h1>
Este componente muestra una pantalla de carga durante 3 segundos, luego navega a la pantalla de acceso a la cámara. Se utiliza en la pantalla principal de la aplicación.

Props
navigation: objeto que contiene funciones para navegar entre las pantallas.
Uso

```javascript
import Loading from '../components/Loading';

function MainScreen({ navigation }) {
  return (
    <Loading navigation={navigation} />
  );
}
```

<h1>Home</h1>
Este componente muestra una lista de memes y un campo de búsqueda en la pantalla principal de la aplicación. Utiliza la API de Reddit para recuperar los datos de los memes.

Props
navigation: objeto que contiene funciones para navegar entre las pantallas.
Uso
```javascript
import Home from '../components/Home';

function MainScreen({ navigation }) {
  return (
    <Home navigation={navigation} />
  );
}
```

<h1>GPS</h1>
Este componente se utiliza para obtener permiso para acceder a la ubicación del usuario. Utiliza el componente Solicitudes para mostrar un mensaje de permiso en la pantalla.

Props
navigation: objeto que contiene funciones para navegar entre las pantallas.
Uso
```javascript
import Gps from '../components/Gps';

function MainScreen({ navigation }) {
  return (
    <Gps navigation={navigation} />
  );
}
```

<h1>Item</h1>
Este componente representa un elemento en la lista de memes en la pantalla principal de la aplicación.

Props
item: objeto que contiene información sobre el meme, como el título, la URL, la puntuación y el número de comentarios.
Uso

```javascript
import Item from '../components/Item';

function MainScreen() {
  const item = { title: 'This is a meme', url: 'http://example.com', score: 42, num_comments: 7 };
  return (
    <Item item={item} />
  );
}
```

<h1>Hooks</h1>

<h1>useFetch</h1>

Se encarga de hacer una solicitud a una API y devolver los resultados en una matriz que contiene el resultado de la solicitud, una función para volver a hacer la solicitud, un indicador booleano para indicar si se está cargando la solicitud y una cadena que contiene cualquier error que pueda haber ocurrido durante la solicitud.

El hook utiliza los estados de React "useState" y "useEffect" para manejar el estado de la solicitud. Toma una función "api" que devuelve una promesa que resuelve en una respuesta de la API.

La función "useFetch" devuelve una matriz que contiene los siguientes elementos:

"data": el resultado de la solicitud a la API, que puede ser nulo si aún no se ha completado la solicitud.
"fetchData": una función que se puede llamar para volver a hacer la solicitud a la API.
"loading": un indicador booleano que indica si se está cargando la solicitud.
"error": una cadena que contiene cualquier error que pueda haber ocurrido durante la solicitud.
En la función "fetchData", se establece el estado "loading" en verdadero antes de hacer la solicitud. Luego, se intenta hacer la solicitud utilizando la función "api" que se pasa como parámetro. Si la solicitud no se resuelve correctamente, se establece el estado "error" en una cadena que contiene información sobre el error. Si la solicitud se resuelve correctamente, se convierte la respuesta en un objeto JSON y se establece el estado "data" con ese objeto. Finalmente, el estado "loading" se establece en falso.

La función "useEffect" se utiliza para hacer la solicitud a la API una vez que se ha montado el componente. Esto se hace para asegurarse de que se haga la solicitud solo una vez.

<h1>usePermisos</h1>

El hook usePermisos se utiliza para obtener permisos en una aplicación de React Native.

Parámetros
tipoPermiso: es una cadena de caracteres que representa el tipo de permiso que se desea solicitar.
siguientePantalla: es una función que se ejecuta cuando se otorgan los permisos.
Valores de retorno
El hook retorna un arreglo con los siguientes elementos:

permisos: es un valor booleano que indica si se han otorgado los permisos.
setRecargar: es una función que se utiliza para forzar la recarga del hook y solicitar nuevamente los permisos.
Uso
El hook se utiliza llamando a la función usePermisos y pasando como argumentos el tipo de permiso y la función a ejecutar cuando se otorgan los permisos. El valor de retorno del hook se desestructura para obtener los valores de permisos y setRecargar.

Ejemplo de uso:

```javascript
import React from 'react';
import usePermisos from './usePermisos';

function App() {
  const [permisos, setRecargar] = usePermisos(PermissionsAndroid.PERMISSIONS.CAMERA, siguientePantalla);

  function siguientePantalla() {
    console.log('Permisos otorgados, avanzando a la siguiente pantalla.');
  }

  function volverAtras() {
    setRecargar(true);
  }

  return (
    <View>
      {permisos && (
        <Text>Los permisos para la cámara han sido otorgados.</Text>
      )}
      {!permisos && (
        <Button title="Solicitar permisos" onPress={() => setRecargar(true)} />
      )}
      <Button title="Volver atrás" onPress={volverAtras} />
    </View>
  );
}
```
En este ejemplo, se utiliza el hook usePermisos para solicitar permisos para la cámara. Cuando se otorgan los permisos, se ejecuta la función siguientePantalla. La función volverAtras se utiliza para forzar la recarga del hook y volver a solicitar los permisos.

<h1>Funciones</h1>

<h1>fetch</h1>
función asincrónica que realiza una petición HTTP utilizando el método fetch. Toma tres argumentos opcionales: url, updateEndPoint y método. Por defecto, el valor del método es 'GET'. La función se utiliza para conectarse a la API de Reddit, y puede usarse para realizar otras solicitudes HTTP.

Parámetros:

url: una cadena que representa la URL de la API a la que se desea conectarse.
updateEndPoint: una cadena que representa el endpoint de la API que se desea actualizar.
method: una cadena que representa el método HTTP utilizado para la solicitud. Por defecto, es 'GET'.
Retorno:
La función devuelve una promesa que se resuelve con el resultado de la solicitud. En caso de error, se devuelve una cadena que describe el error.

Comportamiento:
La función utiliza el método fetch para realizar una petición HTTP. Si el método es 'GET' o 'HEAD', el cuerpo de la solicitud se establece en null. Si hay algún parámetro en la solicitud, se codifica en formato JSON y se establece como el cuerpo de la solicitud. La función devuelve una promesa que se resuelve con la respuesta de la solicitud. Si ocurre un error durante la solicitud, se captura y se devuelve una cadena que describe el error.

<h1>Memes.js</h1>
El código utiliza el patrón de diseño módulo revelador y exporta un objeto llamado Memes. Este objeto tiene un método llamado listarConFiltro que recibe dos argumentos: query (cadena de texto para filtrar los memes) y pag (número de página para la paginación). El método utiliza una función fetch para realizar una llamada a una API de Reddit con el fin de obtener una lista de memes que cumplan con el filtro especificado.

El objeto Memes está definido dentro de una función anónima que se ejecuta inmediatamente al ser cargado el módulo. Esta función retorna el objeto con los métodos y propiedades que están disponibles públicamente. El propósito de este patrón de diseño es encapsular y ocultar el comportamiento interno del módulo, permitiendo que solo se expongan los elementos necesarios para su uso externo.

<h1>Componentes Forms</h1>

<h1>CargaDatos</h1>
El componente "CargaDatos" es una función de React que recibe varios props como entrada para poder renderizar una pantalla de datos que son cargados desde una API. A continuación, se detalla su documentación:

Props:
navigation: objeto que permite navegar entre pantallas en React Navigation.
transformacionDatos: función que recibe los datos crudos de la API y los transforma en un formato adecuado para ser renderizados en la pantalla.
api: función que devuelve una promesa con los datos obtenidos desde la API.
Header: componente que renderiza el encabezado de la pantalla.
FlatList: componente que renderiza la lista de datos obtenidos desde la API.
textSearch: texto que se utiliza como filtro de búsqueda en la API.
Funcionamiento:
El componente utiliza el hook personalizado "useFetch" para obtener los datos desde la API. Luego, se transforman los datos mediante la función "transformacionDatos" y se almacenan en el estado local "dataFilter". Si ocurre un error durante la obtención de datos desde la API, se muestra un mensaje de error. En caso contrario, se renderiza el componente "FlatList" con los datos transformados. Además, se utiliza el hook "useLayoutEffect" para ocultar el encabezado de la pantalla mediante la función "navigation.setOptions".












