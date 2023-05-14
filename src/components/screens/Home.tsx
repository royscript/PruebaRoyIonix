import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import configIcon from '../../assets/bitmap.png';
import searchIcon from '../../assets/search.png';
import useFetch from '../../hooks/useFetch';
import Spinner from 'react-native-loading-spinner-overlay';
import Memes from '../apis/Memes';
import FlatListHome from './FlatListHome';

const icons = {
    config : configIcon,
    search : searchIcon
}
const Header = ({navigation})=>{
    return <View style={homeStyles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate('AccessCamera')}> 
                <Image source={icons.config} style={homeStyles.icon} />
            </TouchableOpacity>
            <SearchBar/>
        </View>
}
const SearchBar = ()=>{
    return <View style={homeStyles.searchBar}>
                <Image source={icons.search} style={homeStyles.iconSearch} />
                <TextInput
                    value={()=>null}
                    onChangeText={()=>null}
                    style={homeStyles.searchInput}
                    placeholder="Buscar..."
                />
            </View>
}
const Home = ({ navigation })=>{
    const [ dataFilter, setDataFilter ] = useState([]);
    const [data, fetchData, loading, error] = useFetch(Memes.listar);
    const transformacionDatos = ()=>{
        if(data !== null){
            if(typeof data.data !== 'undefined'){
                const filter = data.data.children.filter(v=>v.data.post_hint === 'image').map((v, key) =>{
                    const { title, url, link_flair_text, Shitposting, score, num_comments, post_hint } = v.data;
                    return { title, url, link_flair_text, Shitposting, score, num_comments, id : key };
                });
                setDataFilter(filter);
            }
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    useEffect(()=>{
        transformacionDatos();
    },[data])
    if(loading){
        return <View style={homeStyles.container}>
                        <Header navigation={navigation}/>
                        <Spinner visible={loading} />
                        <Text>Cargando...</Text>
                </View>
    }else if(error !== null){
        return <View style={homeStyles.container}>
                    <Header navigation={navigation}/>
                    <Text>Error : { JSON.stringify(error)}</Text>
            </View>
    }else{
        return(
            <View style={homeStyles.container}>
                <Header navigation={navigation}/>
                <FlatListHome
                    dataFilter={dataFilter}
                    loading={loading}
                    fetchData={fetchData}
                />
            </View>
        )
    }
}
export default Home;