import { useLayoutEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import configIcon from '../../assets/bitmap.png';
import arrowUpIcon from '../../assets/186407512.png';
import arrowDownIcon from '../../assets/1864075121.png';

const icons = {
    config : configIcon,
    arrowUp : arrowUpIcon,
    arrowDown : arrowDownIcon
}

const DATA = [
    {
      id: '1',
      title: 'Tarjeta 1',
      imageUrl: 'https://via.placeholder.com/150',
      count: 5,
    },
    {
      id: '2',
      title: 'Tarjeta 2',
      imageUrl: 'https://via.placeholder.com/150',
      count: 10,
    },
    {
      id: '3',
      title: 'Tarjeta 3',
      imageUrl: 'https://via.placeholder.com/150',
      count: 3,
    },
  ];

  const renderItem = ({ item }) => {
    return (
        <View style={homeStyles.card}>
            <View style={homeStyles.imageContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={homeStyles.image}
                />
            </View>
            <View style={homeStyles.textContainer}>
                <Text style={homeStyles.title}>Título</Text>
                <Text style={homeStyles.description}>Descripción</Text>
            </View>
            <View style={homeStyles.iconContainer}>
            
            </View>
      </View>
    );
  };
const Home = ({ navigation })=>{
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return(
        <View style={homeStyles.container}>
            <View style={homeStyles.header}>
                <Image source={icons.config} style={homeStyles.icon} />
                <View style={homeStyles.searchBar}>
                <Text>Search Bar</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
export default Home;