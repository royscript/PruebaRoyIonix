import { View, Image, TouchableOpacity, TextInput  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import configIcon from '../../assets/bitmap.png';
import searchIcon from '../../assets/search.png';
import Memes from '../apis/Memes';
import FlatListHome from './FlatListHome';
import SearchBar from '../forms/SearchBar';
import CargaDatos from '../forms/CargaDatos';
import React, { useEffect, useState } from 'react';

const icons = {
    config : configIcon,
    search : searchIcon
}


const Home = ({navigation})=>{
    const [textSearch, setTextSearch] = useState("");
    const llamadasApi = ()=>{
        if(textSearch.length===0){
            return Memes.listarConFiltro("Coquimbo");
        }else{
            return Memes.listarConFiltro(textSearch);
        }
    }
    const Header = React.memo(()=>{
        return <View style={homeStyles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('AccessCamera')}> 
                    <Image source={icons.config} style={homeStyles.icon} />
                </TouchableOpacity>
                <SearchBar search={textSearch} setSearch={setTextSearch} onSubmitEditing={() => Keyboard.dismiss()} />

            </View>
    });
    const transformacionDatos = (data = {})=>{
        if(data !== null){
            if(typeof data.data !== 'undefined'){
                const filter = data.data.children.filter(v=>v.data.post_hint === 'image').map((v, key) =>{
                    const { title, url, link_flair_text, Shitposting, score, num_comments, post_hint } = v.data;
                    return { title, url, link_flair_text, Shitposting, score, num_comments, id : key };
                });
                return filter;
            }
        }
    }
    return <CargaDatos 
                        transformacionDatos={transformacionDatos} 
                        api={llamadasApi} 
                        textSearch={textSearch}
                        Header={Header} 
                        navigation={navigation}
                        FlatList={FlatListHome}
                        />
}
export default Home;