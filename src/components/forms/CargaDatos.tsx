import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import useFetch from '../../hooks/useFetch';
import Spinner from 'react-native-loading-spinner-overlay';
const CargaDatos = ({ navigation, transformacionDatos, api, Header, FlatList, textSearch })=>{
    const [ dataFilter, setDataFilter ] = useState([]);
    const [data, fetchData, loading, error] = useFetch(api);
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    useEffect(()=>{
        setDataFilter(transformacionDatos(data));
    },[data])
    useEffect(()=>{
        fetchData();
    },[textSearch]);
    if(loading){
        return <View style={homeStyles.container}>
                        <Header/>
                        
                        <Text>Cargando...</Text>
                </View>
    }else if(error !== null){
        return <View style={homeStyles.container}>
                    <Header/>
                    <Text>Error : { JSON.stringify(error)}</Text>
            </View>
    }else{
        return(
            <View style={homeStyles.container}>
                <Header/>
                <FlatList
                    dataFilter={dataFilter}
                    loading={loading}
                    fetchData={fetchData}
                />
            </View>
        )
    }
}
export default CargaDatos;