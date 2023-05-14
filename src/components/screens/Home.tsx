import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, TextInput  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import configIcon from '../../assets/bitmap.png';
import arrowUpIcon from '../../assets/186407512.png';
import arrowDownIcon from '../../assets/1864075121.png';
import likeIcon from '../../assets/iconslike-copy.png';
import useFetch from '../../hooks/useFetch';

const icons = {
    config : configIcon,
    arrowUp : arrowUpIcon,
    arrowDown : arrowDownIcon,
    like : likeIcon
}

  const renderItem = ({ item }) => {
    return (
        <View style={homeStyles.card}>
            <View style={homeStyles.imageContainer}>
                <Image
                    source={{ uri: item.url }}
                    style={homeStyles.image}
                />
            </View>
            <View style={homeStyles.textContainer}>
                <Text style={homeStyles.title}>{item.title}</Text>
            </View>
            <View style={homeStyles.iconContainer}>
                <Image source={icons.arrowUp} style={homeStyles.arrowUp} />
                <Text style={homeStyles.numberArrow}>{item.score}</Text>
                <Image source={icons.arrowDown} style={homeStyles.arrowDown} />
            </View>
            <View>
                <Image source={icons.like} style={homeStyles.likeIcon} />
                <Text style={homeStyles.numberLike}>{item.num_comments}</Text>
            </View>
      </View>
    );
  };
const Home = ({ navigation })=>{
    const [ dataFilter, setDataFilter ] = useState([]);
    const [data, fetchData, loading, error] = useFetch('https://www.reddit.com/r/chile/search.json?q=valparaiso&limit=100');
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    useEffect(()=>{
        if(data !== null){
            if(typeof data.data !== 'undefined'){
                const filter = data.data.children.map((v, key) =>{
                    const { title, url, link_flair_text, Shitposting, score, num_comments } = v.data;
                    return { title, url, link_flair_text, Shitposting, score, num_comments, id : key };
                });
                setDataFilter(filter);
            }
        }
    },[data])
    useEffect(()=>{
        console.log(loading, error);
    },[loading, error])
    return(
        <View style={homeStyles.container}>
            <View style={homeStyles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('AccessCamera')}> 
                    <Image source={icons.config} style={homeStyles.icon} />
                </TouchableOpacity>
                <View style={homeStyles.searchBar}>
                    <TextInput
                        value={()=>null}
                        onChangeText={()=>null}
                        placeholder="Buscar..."
                    />
                </View>
            </View>
            <FlatList
                data={dataFilter}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default Home;