import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import homeStyles from '../styles/homeStyles';
import useFetch from '../../hooks/useFetch';
import loadingStyles from '../styles/loadingStyles';

const CargaDatos = ({ navigation, transformacionDatos, api, Header, FlatList, textSearch }) => {
  const [dataFilter, setDataFilter] = useState([]);
  const [data, fetchData, loading, error] = useFetch(api);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    setDataFilter(transformacionDatos(data));
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [textSearch]);

  return (
    <View style={homeStyles.container}>
      <Header />
      {(error !== null) || (loading === true) ? (
        <Text style={loadingStyles.text}>
          {loading? 'Cargando' : `Error : ${JSON.stringify(error)}`}
        </Text>
      ) : (
        <>
          <FlatList dataFilter={dataFilter} loading={loading} fetchData={fetchData} />
        </>
      )}
    </View>
  );
};

export default CargaDatos;