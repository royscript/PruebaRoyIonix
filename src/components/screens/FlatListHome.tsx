import { View, Image, Text, FlatList, RefreshControl  } from 'react-native';
import homeStyles from '../styles/homeStyles';
import arrowUpIcon from '../../assets/186407512.png';
import arrowDownIcon from '../../assets/1864075121.png';
import likeIcon from '../../assets/iconslike-copy.png';

const icons = {
  arrowUp: arrowUpIcon,
  arrowDown: arrowDownIcon,
  like: likeIcon,
};

const renderItem = ({ item }) => {
  const texto = item.title.trim().substring(0, 100);
  return (
    <View style={homeStyles.cardContainer}>
      <View style={homeStyles.card}>
        <View style={homeStyles.imageContainer}>
          <Image source={{ uri: item.url }} style={homeStyles.image} />
        </View>
        <View style={homeStyles.textContainer}>
          <Text style={homeStyles.title}>{texto}</Text>
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
    </View>
  );
};

const FlatListHome = ({ dataFilter, loading, fetchData }) => {
  return (
    <FlatList
      keyboardShouldPersistTaps='always'
      data={dataFilter}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchData} />}
      onEndReached={fetchData}
    />
  );
};

export default FlatListHome;
